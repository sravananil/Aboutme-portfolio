import { motion, AnimatePresence } from 'motion/react';
import { X, Image as ImageIcon, Video, Send, Rocket } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from './ui/button';
 
interface FeedbackDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (feedback: FeedbackPost) => void;
}
 
export interface FeedbackPost {
  id: string;
  name: string;
  topic: string;
  content: string;
  images: string[];
  videos: string[];
  timestamp: Date;
  likes: number;
}
 
const topics = [
  { value: 'about-me', label: 'About Me', emoji: '👤' },
  { value: 'projects', label: 'Projects', emoji: '🚀' },
  { value: 'team-leader', label: 'Team Leader Role', emoji: '👨‍💼' },
  { value: 'suggestions', label: 'Genuine Suggestions for Self-Improvement', emoji: '💡' },
  { value: 'qa', label: 'Public Q&A Section', emoji: '❓' },
];
 
export function FeedbackDialog({ isOpen, onClose, onSubmit }: FeedbackDialogProps) {
  const [selectedTopic, setSelectedTopic] = useState(topics[0].value);
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);
 
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newImages.push(reader.result as string);
          if (newImages.length === files.length) {
            setImages(prev => [...prev, ...newImages]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
 
  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newVideos: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newVideos.push(reader.result as string);
          if (newVideos.length === files.length) {
            setVideos(prev => [...prev, ...newVideos]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };
 
  const handleSubmit = () => {
    if (!name.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    
    const feedback: FeedbackPost = {
      id: Date.now().toString(),
      name: name.trim(),
      topic: selectedTopic,
      content,
      images,
      videos,
      timestamp: new Date(),
      likes: 0,
    };
 
    setTimeout(() => {
      onSubmit(feedback);
      setName('');
      setContent('');
      setImages([]);
      setVideos([]);
      setSelectedTopic(topics[0].value);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };
 
  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };
 
  const removeVideo = (index: number) => {
    setVideos(prev => prev.filter((_, i) => i !== index));
  };
 
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />
 
          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl border border-white/10 z-[201] p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Share Your Feedback
                </h2>
                <p className="text-gray-400 text-sm mt-1">Your thoughts help me grow and improve</p>
              </motion.div>
              
              <motion.button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-400" />
              </motion.button>
            </div>
 
            {/* Topic Selector - Tabs Style */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <label className="text-sm text-gray-400 mb-3 block">Select Feedback Topic</label>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <motion.button
                    key={topic.value}
                    onClick={() => setSelectedTopic(topic.value)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      selectedTopic === topic.value
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{topic.emoji}</span>
                    {topic.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
 
            {/* Name Input */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <label className="text-sm text-gray-400 mb-3 block">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name (e.g. John Doe)"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </motion.div>
 
            {/* Content Input */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <label className="text-sm text-gray-400 mb-3 block">Your Feedback</label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share your thoughts, suggestions, or questions..."
                className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
              />
            </motion.div>
 
            {/* Media Upload Options */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-6"
            >
              <label className="text-sm text-gray-400 mb-3 block">Add Media (Optional)</label>
              <div className="flex gap-3">
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  multiple
                  onChange={handleVideoUpload}
                  className="hidden"
                />
                
                <motion.button
                  onClick={() => imageInputRef.current?.click()}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ImageIcon className="w-5 h-5" />
                  <span className="text-sm">Add Images</span>
                </motion.button>
                
                <motion.button
                  onClick={() => videoInputRef.current?.click()}
                  className="flex-1 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Video className="w-5 h-5" />
                  <span className="text-sm">Add Videos</span>
                </motion.button>
              </div>
            </motion.div>
 
            {/* Preview uploaded images */}
            {images.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6"
              >
                <label className="text-sm text-gray-400 mb-3 block">Images ({images.length})</label>
                <div className="flex gap-2 flex-wrap">
                  {images.map((img, index) => (
                    <div key={index} className="relative group">
                      <img src={img} alt={`Upload ${index + 1}`} className="w-20 h-20 object-cover rounded-lg" />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
 
            {/* Preview uploaded videos */}
            {videos.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6"
              >
                <label className="text-sm text-gray-400 mb-3 block">Videos ({videos.length})</label>
                <div className="flex gap-2 flex-wrap">
                  {videos.map((video, index) => (
                    <div key={index} className="relative group">
                      <video src={video} className="w-32 h-20 object-cover rounded-lg" />
                      <button
                        onClick={() => removeVideo(index)}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
 
            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <Button
                onClick={handleSubmit}
                disabled={!name.trim() || !content.trim() || isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-2"
                  >
                    <Rocket className="w-5 h-5" />
                    <span>Launching...</span>
                  </motion.div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>Post Feedback</span>
                  </div>
                )}
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}