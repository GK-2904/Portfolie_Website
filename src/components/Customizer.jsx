import React, { useState } from 'react';
import { Settings, X, Save, RotateCcw, Download, Image, User, Briefcase, FileCode, Check, Award, Plus, Trash2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Customizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const { rawData, updateData, resetData } = usePortfolio();
  const [tempData, setTempData] = useState(rawData);
  const [saveStatus, setSaveStatus] = useState(null);

  // Sync temp data with context changes if reset is clicked
  React.useEffect(() => {
    setTempData(rawData);
  }, [rawData]);

  const handleTextChange = (section, field, value) => {
    setTempData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleNestedListChange = (section, index, field, value) => {
    setTempData(prev => {
      const updatedList = [...prev[section]];
      updatedList[index] = {
        ...updatedList[index],
        [field]: value
      };
      return {
        ...prev,
        [section]: updatedList
      };
    });
  };

  // Convert uploaded image to Base64
  const handleImageUpload = (section, index, field, e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image is too large. Please choose an image under 2MB for storage persistence.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (index !== null) {
        handleNestedListChange(section, index, field, reader.result);
      } else {
        handleTextChange(section, field, reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleAddGalleryItem = () => {
    setTempData(prev => ({
      ...prev,
      galleryItems: [
        ...prev.galleryItems,
        {
          id: Date.now(),
          title: "New Rescue Drills",
          subtitle: "Rescue Action",
          category: "Disaster Response",
          image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=800&auto=format&fit=crop",
          description: "Brief description of the dynamic rescue drill."
        }
      ]
    }));
  };

  const handleDeleteGalleryItem = (index) => {
    setTempData(prev => ({
      ...prev,
      galleryItems: prev.galleryItems.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    updateData(tempData);
    setSaveStatus('success');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all custom images and text to original template values?")) {
      resetData();
      setSaveStatus('reset');
      setTimeout(() => setSaveStatus(null), 3000);
    }
  };

  const handleExport = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(tempData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "trainingData_custom.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <>
      {/* Floating Gear Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-rescue-600 hover:bg-rescue-700 text-white rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 border border-rescue-500/50 flex items-center justify-center animate-bounce-slow"
        aria-label="Customize Portfolio"
      >
        <Settings className="w-6 h-6 animate-spin-slow" />
      </button>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs transition-opacity duration-300">
          <div className="w-full max-w-lg h-full bg-white dark:bg-navy-950 shadow-2xl flex flex-col border-l border-gray-200 dark:border-navy-900 transition-transform duration-300 transform translate-x-0 relative">
            
            {/* Header */}
            <div className="p-6 border-b border-gray-100 dark:border-navy-900 flex items-center justify-between">
              <div>
                <h3 className="font-heading font-black text-xl text-navy-800 dark:text-white flex items-center gap-2">
                  <Settings className="w-5 h-5 text-rescue-600" />
                  <span>Customize Portfolio</span>
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Change text, upload files, or paste direct URLs in real time.
                </p>
              </div>
              
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap border-b border-gray-100 dark:border-navy-900 bg-gray-50 dark:bg-navy-900/50">
              <button
                onClick={() => setActiveTab('profile')}
                className={`flex-grow py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2 transition-colors ${
                  activeTab === 'profile'
                    ? "border-rescue-600 text-rescue-600 bg-white dark:bg-navy-950"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <User className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Profile</span>
              </button>
              
              <button
                onClick={() => setActiveTab('activities')}
                className={`flex-grow py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2 transition-colors ${
                  activeTab === 'activities'
                    ? "border-rescue-600 text-rescue-600 bg-white dark:bg-navy-950"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Briefcase className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Activities</span>
              </button>
              
              <button
                onClick={() => setActiveTab('gallery')}
                className={`flex-grow py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2 transition-colors ${
                  activeTab === 'gallery'
                    ? "border-rescue-600 text-rescue-600 bg-white dark:bg-navy-950"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Image className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Gallery</span>
              </button>

              <button
                onClick={() => setActiveTab('certificates')}
                className={`flex-grow py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2 transition-colors ${
                  activeTab === 'certificates'
                    ? "border-rescue-600 text-rescue-600 bg-white dark:bg-navy-950"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <Award className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Certificates</span>
              </button>

              <button
                onClick={() => setActiveTab('export')}
                className={`flex-grow py-3 text-xs font-bold flex items-center justify-center gap-1 border-b-2 transition-colors ${
                  activeTab === 'export'
                    ? "border-rescue-600 text-rescue-600 bg-white dark:bg-navy-950"
                    : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                <FileCode className="w-4 h-4 shrink-0" />
                <span className="hidden sm:inline">Export</span>
              </button>
            </div>

            {/* Scrollable Form Body */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">Main Heading Details</h4>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Trainer Name</label>
                    <input
                      type="text"
                      value={tempData.instructorInfo.name}
                      onChange={(e) => handleTextChange('instructorInfo', 'name', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-55 dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded-lg text-sm focus:outline-none focus:border-rescue-600 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Role Label</label>
                    <input
                      type="text"
                      value={tempData.instructorInfo.role}
                      onChange={(e) => handleTextChange('instructorInfo', 'role', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-55 dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded-lg text-sm focus:outline-none focus:border-rescue-600 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Academy Name</label>
                    <input
                      type="text"
                      value={tempData.instructorInfo.academy}
                      onChange={(e) => handleTextChange('instructorInfo', 'academy', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-55 dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded-lg text-sm focus:outline-none focus:border-rescue-600 dark:text-white"
                    />
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-gray-100 dark:border-navy-900">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 block mb-2">Avatar Profile Image</label>
                    <div className="flex gap-4 items-center">
                      <img 
                        src={tempData.instructorInfo.avatar} 
                        alt="Avatar Preview" 
                        className="w-16 h-16 rounded-xl object-cover border border-gray-200 dark:border-navy-800"
                      />
                      <div className="flex-grow space-y-2">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload('instructorInfo', null, 'avatar', e)}
                          className="text-xs file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-rescue-50 file:text-rescue-600 hover:file:bg-rescue-100 cursor-pointer dark:text-gray-400"
                        />
                        <input
                          type="text"
                          placeholder="Or paste Direct Image URL"
                          value={tempData.instructorInfo.avatar.startsWith('data:') ? '' : tempData.instructorInfo.avatar}
                          onChange={(e) => handleTextChange('instructorInfo', 'avatar', e.target.value)}
                          className="w-full px-2.5 py-1.5 bg-gray-55 dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded-md text-xs focus:outline-none focus:border-rescue-600 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-4 border-t border-gray-100 dark:border-navy-900">
                    <label className="text-xs font-semibold text-gray-600 dark:text-gray-400">Bio Narrative / Introduction</label>
                    <textarea
                      rows={6}
                      value={tempData.instructorInfo.bio}
                      onChange={(e) => handleTextChange('instructorInfo', 'bio', e.target.value)}
                      className="w-full px-3 py-2 bg-gray-55 dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded-lg text-xs sm:text-sm focus:outline-none focus:border-rescue-600 dark:text-white resize-none font-mono"
                    />
                  </div>
                </div>
              )}

              {/* Activities Tab */}
              {activeTab === 'activities' && (
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-heading">9 Training Activities Images</h4>
                  
                  {tempData.activities.map((act, index) => (
                    <div key={act.id} className="p-4 bg-gray-55 dark:bg-navy-900/40 rounded-xl border border-gray-150 dark:border-navy-900/60 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-xs text-rescue-600 dark:text-rescue-400">Activity {index + 1}</span>
                        <span className="text-xs text-gray-700 dark:text-gray-300 font-extrabold">{act.title}</span>
                      </div>
                      
                      <div className="flex gap-4 items-center">
                        <img 
                          src={act.image} 
                          alt={act.title}
                          className="w-16 h-12 rounded-lg object-cover border border-gray-250 dark:border-navy-800"
                        />
                        
                        <div className="flex-grow space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload('activities', index, 'image', e)}
                            className="text-[10px] file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-rescue-50 file:text-rescue-600 hover:file:bg-rescue-100 cursor-pointer dark:text-gray-400"
                          />
                          <input
                            type="text"
                            placeholder="Or paste Direct Image URL"
                            value={act.image.startsWith('data:') ? '' : act.image}
                            onChange={(e) => handleNestedListChange('activities', index, 'image', e.target.value)}
                            className="w-full px-2 py-1 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-850 rounded text-[11px] focus:outline-none focus:border-rescue-600 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Gallery Tab */}
              {activeTab === 'gallery' && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 font-heading">
                      {tempData.galleryItems.length} Gallery Photos
                    </h4>
                  </div>
                  
                  {tempData.galleryItems.map((item, index) => (
                    <div key={item.id} className="p-4 bg-gray-55 dark:bg-navy-900/40 rounded-xl border border-gray-150 dark:border-navy-900/60 space-y-3 relative">
                      <div className="flex justify-between items-center border-b border-gray-100 dark:border-navy-900 pb-2">
                        <span className="font-bold text-xs text-rescue-600 dark:text-rescue-400">Photo {index + 1}</span>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={item.title}
                            onChange={(e) => handleNestedListChange('galleryItems', index, 'title', e.target.value)}
                            placeholder="Photo Title"
                            className="px-2 py-0.5 border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-xs font-bold text-right dark:text-white rounded"
                          />
                          <button
                            onClick={() => handleDeleteGalleryItem(index)}
                            className="p-1 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 text-red-655 dark:text-red-400 rounded transition-colors"
                            title="Delete Photo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-550 dark:text-gray-400 font-semibold">Category</label>
                          <input
                            type="text"
                            value={item.category}
                            onChange={(e) => handleNestedListChange('galleryItems', index, 'category', e.target.value)}
                            placeholder="e.g. Water Rescue"
                            className="px-2 py-1 border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 rounded dark:text-white text-xs"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label className="text-[10px] text-gray-555 dark:text-gray-400 font-semibold">Description</label>
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => handleNestedListChange('galleryItems', index, 'description', e.target.value)}
                            placeholder="Brief description..."
                            className="px-2 py-1 border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 rounded dark:text-white text-xs"
                          />
                        </div>
                      </div>

                      <div className="flex gap-4 items-center pt-1">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-16 h-12 rounded-lg object-cover border border-gray-250 dark:border-navy-800"
                        />
                        
                        <div className="flex-grow space-y-2">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload('galleryItems', index, 'image', e)}
                            className="text-[10px] file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-rescue-50 file:text-rescue-600 hover:file:bg-rescue-100 cursor-pointer dark:text-gray-400"
                          />
                          <input
                            type="text"
                            placeholder="Or paste Direct Image URL"
                            value={item.image.startsWith('data:') ? '' : item.image}
                            onChange={(e) => handleNestedListChange('galleryItems', index, 'image', e.target.value)}
                            className="w-full px-2 py-1 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-850 rounded text-[11px] focus:outline-none focus:border-rescue-600 dark:text-white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <button
                    onClick={handleAddGalleryItem}
                    className="w-full py-3 bg-rescue-50 dark:bg-navy-900 hover:bg-rescue-100 dark:hover:bg-navy-800/80 text-rescue-600 dark:text-rescue-400 font-bold text-sm rounded-xl border border-dashed border-rescue-300 dark:border-navy-700 flex items-center justify-center gap-2 transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Photo</span>
                  </button>
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === 'certificates' && (
                <div className="space-y-6">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-heading">Instructor Certificates</h4>
                  
                  {tempData.certifications.map((cert, index) => (
                    <div key={cert.id} className="p-4 bg-gray-55 dark:bg-navy-900/40 rounded-xl border border-gray-150 dark:border-navy-900/60 space-y-3">
                      <div className="flex justify-between items-center border-b border-gray-100 dark:border-navy-900 pb-2">
                        <span className="font-bold text-xs text-rescue-600 dark:text-rescue-400">Certificate {index + 1}</span>
                        <input
                          type="text"
                          value={cert.title}
                          onChange={(e) => handleNestedListChange('certifications', index, 'title', e.target.value)}
                          placeholder="Certificate Title"
                          className="px-2 py-0.5 border border-gray-200 dark:border-navy-800 bg-white dark:bg-navy-900 text-xs font-bold text-right dark:text-white rounded w-64"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-gray-550 dark:text-gray-400 font-semibold">Issuing Organization</label>
                        <input
                          type="text"
                          value={cert.organization}
                          onChange={(e) => handleNestedListChange('certifications', index, 'organization', e.target.value)}
                          placeholder="e.g. Disaster Management Authority"
                          className="w-full px-2.5 py-1.5 bg-white dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded text-xs focus:outline-none focus:border-rescue-600 dark:text-white"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-gray-550 dark:text-gray-400 font-semibold">Description</label>
                        <textarea
                          rows={2}
                          value={cert.description}
                          onChange={(e) => handleNestedListChange('certifications', index, 'description', e.target.value)}
                          placeholder="Certificate details..."
                          className="w-full px-2.5 py-1.5 bg-white dark:bg-navy-900 border border-gray-250 dark:border-navy-800 rounded text-xs focus:outline-none focus:border-rescue-600 dark:text-white resize-none"
                        />
                      </div>

                      <div className="space-y-1.5 pt-2">
                        <label className="text-[10px] text-gray-550 dark:text-gray-400 font-bold block mb-1">Certificate Image</label>
                        <div className="flex gap-4 items-center">
                          <img 
                            src={cert.image} 
                            alt={cert.title}
                            className="w-16 h-12 rounded-lg object-cover border border-gray-250 dark:border-navy-800"
                          />
                          <div className="flex-grow space-y-2">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload('certifications', index, 'image', e)}
                              className="text-[10px] file:mr-3 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-bold file:bg-rescue-50 file:text-rescue-600 hover:file:bg-rescue-100 cursor-pointer dark:text-gray-400"
                            />
                            <input
                              type="text"
                              placeholder="Or paste Direct Image URL"
                              value={cert.image.startsWith('data:') ? '' : cert.image}
                              onChange={(e) => handleNestedListChange('certifications', index, 'image', e.target.value)}
                              className="w-full px-2 py-1 bg-white dark:bg-navy-900 border border-gray-200 dark:border-navy-850 rounded text-[11px] focus:outline-none focus:border-rescue-600 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Export/Reset Tab */}
              {activeTab === 'export' && (
                <div className="space-y-6 flex flex-col justify-center h-64 text-center">
                  <div className="space-y-2">
                    <h4 className="font-heading font-bold text-lg text-navy-800 dark:text-white">Save & Export Configuration</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                      Once you finish uploading your real photos, download the custom config file. You can replace the local file contents or share it directly.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 max-w-xs mx-auto w-full pt-4">
                    <button
                      onClick={handleExport}
                      className="px-4 py-3 bg-navy-800 hover:bg-navy-700/90 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 border border-navy-700 shadow-md transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download JSON Config</span>
                    </button>

                    <button
                      onClick={handleReset}
                      className="px-4 py-3 bg-red-50 hover:bg-red-100 dark:bg-red-950/20 text-red-655 dark:text-red-400 font-bold text-sm rounded-xl flex items-center justify-center gap-2 border border-red-200/50 dark:border-red-900/30 transition-all duration-200"
                    >
                      <RotateCcw className="w-4 h-4 animate-spin-hover" />
                      <span>Reset to Original Defaults</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions Footer */}
            <div className="p-4 border-t border-gray-100 dark:border-navy-900 bg-gray-50 dark:bg-navy-900/50 flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 py-3 px-6 bg-rescue-600 hover:bg-rescue-700 text-white font-bold text-sm rounded-xl shadow-lg hover:shadow-rescue-600/30 flex items-center justify-center gap-2 transition-all duration-205"
              >
                <Save className="w-4 h-4" />
                <span>Apply & Save Changes</span>
              </button>
            </div>

            {/* Feedback Notifications */}
            {saveStatus && (
              <div className="absolute top-20 left-1/2 -translate-x-1/2 px-4 py-2.5 bg-green-600 text-white text-xs font-bold rounded-full shadow-2xl flex items-center gap-2 border border-green-500 animate-slide-in">
                {saveStatus === 'success' && (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Live configuration applied and saved successfully!</span>
                  </>
                )}
                {saveStatus === 'reset' && (
                  <>
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset complete. Default templates restored!</span>
                  </>
                )}
              </div>
            )}

          </div>
        </div>
      )}
    </>
  );
}
