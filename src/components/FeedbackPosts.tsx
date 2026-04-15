import { motion } from 'motion/react';
import { Heart, MessageCircle, Share2, Rocket } from 'lucide-react';
import { useState } from 'react';
import { FeedbackPost } from './FeedbackDialog';
 
interface FeedbackPostsProps {
  posts: FeedbackPost[];
  onLike: (postId: string) => void;
}
 
const topicConfig: Record<string, { color: string; gradient: string; emoji: string }> = {
  'about-me': { color: 'blue', gradient: 'from-blue-500 to-cyan-500', emoji: '👤' },
  'projects': { color: 'purple', gradient: 'from-purple-500 to-pink-500', emoji: '🚀' },
  'team-leader': { color: 'green', gradient: 'from-green-500 to-emerald-500', emoji: '👨‍💼' },
  'suggestions': { color: 'yellow', gradient: 'from-yellow-500 to-orange-500', emoji: '💡' },
  'qa': { color: 'red', gradient: 'from-red-500 to-rose-500', emoji: '❓' },
};
 
const topicLabels: Record<string, string> = {
  'about-me': 'About Me',
  'projects': 'Projects',
  'team-leader': 'Team Leader Role',
  'suggestions': 'Suggestions for Improvement',
  'qa': 'Public Q&A',
};
 
export function FeedbackPosts({ posts, onLike }: FeedbackPostsProps) {
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());
 
  const handleLike = (postId: string) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
    onLike(postId);
  };
 
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
 
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };
 
  if (posts.length === 0) {
    return null;
  }
 
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.3) 2px, transparent 2px),
              radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.3) 2px, transparent 2px)
            `,
            backgroundSize: '60px 60px'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
 
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6"
            animate={{
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.2)',
                '0 0 40px rgba(168, 85, 247, 0.4)',
                '0 0 20px rgba(59, 130, 246, 0.2)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Rocket className="w-6 h-6 text-blue-400" />
            <span className="text-blue-400 font-semibold">Community Feedback</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              What People Are Saying
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real feedback from amazing people like you
          </p>
        </motion.div>
 
        {/* Posts Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => {
            const config = topicConfig[post.topic] || topicConfig['about-me'];
            const isLiked = likedPosts.has(post.id);
 
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  delay: index * 0.1
                }}
                className="relative"
              >
                {/* Rocket Launch Animation */}
                <motion.div
                  initial={{ y: 100, opacity: 0, scale: 0 }}
                  animate={{ 
                    y: [100, -20, 0],
                    opacity: [0, 1, 1],
                    scale: [0, 1.5, 1],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    ease: "easeOut"
                  }}
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
                >
                  <Rocket className={`w-8 h-8 text-${config.color}-400`} />
                  {/* Rocket Trail */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1, repeat: 3 }}
                    className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-20 bg-gradient-to-b ${config.gradient} blur-sm`}
                  />
                </motion.div>
 
                {/* Post Card */}
                <motion.div
                  className="bg-gradient-to-br from-gray-900 to-black rounded-3xl border border-white/10 p-8 shadow-2xl hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Post Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-br ${config.gradient} rounded-full flex items-center justify-center text-2xl`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        {config.emoji}
                      </motion.div>
                      
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-white font-semibold text-base">{post.name}</span>
                          <span className={`px-3 py-1 bg-gradient-to-r ${config.gradient} rounded-full text-xs text-white`}>
                            {topicLabels[post.topic]}
                          </span>
                        </div>
                        <span className="text-gray-500 text-sm">{formatTime(post.timestamp)}</span>
                      </div>
                    </div>
                  </div>
 
                  {/* Post Content */}
                  <div className="mb-6">
                    <p className="text-white font-semibold text-lg mb-2">{post.name}</p>
                    <p className="text-gray-300 text-base leading-relaxed whitespace-pre-wrap">
                      {post.content}
                    </p>
                  </div>
 
                  {/* Media Gallery */}
                  {(post.images.length > 0 || post.videos.length > 0) && (
                    <div className="mb-6">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {post.images.map((img, idx) => (
                          <motion.img
                            key={idx}
                            src={img}
                            alt={`Feedback image ${idx + 1}`}
                            className="w-full h-48 object-cover rounded-2xl border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        ))}
                        {post.videos.map((video, idx) => (
                          <motion.video
                            key={idx}
                            src={video}
                            controls
                            className="w-full h-48 object-cover rounded-2xl border border-white/10"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
 
                  {/* Post Actions */}
                  <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                    <motion.button
                      onClick={() => handleLike(post.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                        isLiked
                          ? `bg-gradient-to-r ${config.gradient} text-white`
                          : 'bg-white/5 text-gray-400 hover:bg-white/10'
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                      </motion.div>
                      <span className="font-semibold">{post.likes + (isLiked ? 1 : 0)}</span>
                    </motion.button>
 
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Reply</span>
                    </motion.button>
 
                    <motion.button
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:bg-white/10 transition-all duration-300 ml-auto"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Share2 className="w-5 h-5" />
                      <span>Share</span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
 