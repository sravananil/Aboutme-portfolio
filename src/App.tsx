import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, ChevronDown, Monitor, Smartphone, Code, GraduationCap, Calendar, Video, Camera, Edit3, Sparkles, Zap, Play, User, FileText, Users, Clock, Database, Globe, Palette, Terminal, Brain, Cpu, Settings, Mail, Award, TrendingUp, Briefcase, CheckCircle2, BookOpen, Target, Rocket, Heart, MessageSquare } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { TypingAnimation } from './components/TypingAnimation';
import { IDCard } from './components/IDCard';
import { MagneticCursor } from './components/MagneticCursor';
import { Confetti } from './components/Confetti';
import { FeedbackDialog, FeedbackPost } from './components/FeedbackDialog';
import { FeedbackPosts } from './components/FeedbackPosts';
import { useState } from 'react';
import exampleImage from 'figma:asset/11d19769842993ba8273081429193721b8835c79.png';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  
  const [confettiActive, setConfettiActive] = useState<{cert1: boolean, cert2: boolean, cert3: boolean, cert4: boolean, cert5: boolean, cert6: boolean}>({
    cert1: false,
    cert2: false,
    cert3: false,
    cert4: false,
    cert5: false,
    cert6: false
  });

  const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);
  const [feedbackPosts, setFeedbackPosts] = useState<FeedbackPost[]>([]);
  const [projectLikes, setProjectLikes] = useState<Record<string, number>>({
    shortloom: 0,
    opticglide: 0,
    project3: 0,
  });

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFeedbackSubmit = (feedback: FeedbackPost) => {
    setFeedbackPosts(prev => [feedback, ...prev]);
  };

  const handlePostLike = (postId: string) => {
    setFeedbackPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, likes: post.likes + (post.likes === 0 ? 1 : -1) } : post
    ));
  };

  const handleProjectLike = (projectId: string) => {
    setProjectLikes(prev => ({
      ...prev,
      [projectId]: prev[projectId] + 1
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Custom Magnetic Cursor */}
      <MagneticCursor />

      {/* Feedback Dialog */}
      <FeedbackDialog 
        isOpen={isFeedbackDialogOpen} 
        onClose={() => setIsFeedbackDialogOpen(false)}
        onSubmit={handleFeedbackSubmit}
      />

      {/* Welcome Splash Screen Effect */}
      <motion.div
        className="fixed inset-0 z-[9999] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        
        {/* Animated Logo/Initial */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            className="text-white text-8xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2, times: [0, 0.2, 0.8, 1] }}
          >
            AK
          </motion.div>
        </motion.div>

        {/* Particle Explosion Effect */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ scale: 0, x: 0, y: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos((i / 30) * Math.PI * 2) * 300,
              y: Math.sin((i / 30) * Math.PI * 2) * 300,
              opacity: [1, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: 1 + (i * 0.02),
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>

      {/* Floating Sparkles Effect - Always visible */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </motion.div>
        ))}
      </div>

      {/* Cursor Trail Effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ left: '20%', top: '30%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          style={{ right: '20%', bottom: '30%' }}
        />
      </motion.div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl z-[100] cursor-pointer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3 }}
        whileHover={{ 
          scale: 1.2,
          boxShadow: "0 0 30px rgba(59, 130, 246, 0.8)"
        }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white rotate-180" />
        </motion.div>
      </motion.button>

      {/* Floating Achievement Badge */}
      <motion.div
        className="fixed bottom-24 right-8 z-[100]"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 4, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 shadow-2xl cursor-pointer"
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            boxShadow: "0 0 40px rgba(251, 191, 36, 0.8)"
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            y: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Award className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-white">
              <div className="text-xs font-semibold">Available for Hire</div>
              <div className="text-[10px] opacity-90">Open to opportunities</div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen grid lg:grid-cols-2 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Left Side - Hero Content */}
        <div className="hidden lg:flex bg-black items-center justify-center p-8 lg:p-16">
          <div className="text-center max-w-2xl relative z-10">
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight leading-tight text-white min-h-[1.2em] flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <TypingAnimation 
                phrases={["Anil Kumar", "Software Developer","Generative AI Explorer"]}
                baseText="Hi, I'm "
                typingSpeed={100}
                deletingSpeed={60}
                delayBetweenPhrases={3000}
                className="block"
              />
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-400 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Full Stack Developer | Generative AI Explorer
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button 
                onClick={scrollToProjects}
                className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
              >
                View Projects
              </Button>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="https://github.com/sravananil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a
                  href="mailto:sravananil75@gmail.com"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6 text-white" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Side - Textured Gray Background with Hanging ID Card */}
        <div className="hidden lg:flex relative bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 items-center justify-center overflow-hidden">
          {/* Textured Stone Pattern */}
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(0,0,0,0.3) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(255,255,255,0.2) 1px, transparent 1px),
              linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)
            `,
            backgroundSize: '20px 20px, 30px 30px, 40px 40px, 40px 40px'
          }}></div>
          
          {/* Stone Texture Overlay */}
          <div className="absolute inset-0 opacity-60" style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                rgba(0,0,0,0.05) 0px,
                rgba(0,0,0,0.05) 1px,
                transparent 1px,
                transparent 20px
              ),
              repeating-linear-gradient(
                -45deg,
                rgba(255,255,255,0.02) 0px,
                rgba(255,255,255,0.02) 1px,
                transparent 1px,
                transparent 25px
              )
            `
          }}></div>
          
          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-500/20 via-transparent to-gray-800/30"></div>
          
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120,120,120,0.3) 1px, transparent 1px),
              radial-gradient(circle at 80% 20%, rgba(180,180,180,0.2) 1px, transparent 1px),
              radial-gradient(circle at 40% 40%, rgba(100,100,100,0.2) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '15px 15px, 25px 25px, 8px 8px'
          }}></div>
          
          {/* Hanging ID Card */}
          <motion.div
            className="relative z-20 pt-20 pr-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <IDCard />
          </motion.div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden absolute inset-0 bg-black flex flex-col">
          {/* Hero Content for Mobile */}
          <div className="flex-1 flex items-center justify-center p-8">
            <div className="text-center max-w-lg">
              <motion.h1 
                className="text-4xl md:text-5xl mb-6 tracking-tight leading-tight text-white min-h-[1.2em] flex items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <TypingAnimation 
                  phrases={["Anil Kumar", "Full Stack Developer", "Generative AI Explorer"]}
                  baseText="Hi, I'm "
                  typingSpeed={100}
                  deletingSpeed={60}
                  delayBetweenPhrases={3000}
                  className="block text-center"
                />
              </motion.h1>
              
              <motion.p 
                className="text-lg text-gray-400 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Full Stack Developer | Generative AI Explorer
              </motion.p>

              <motion.div
                className="flex flex-col gap-4 items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <Button 
                  onClick={scrollToProjects}
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full"
                >
                  View Projects
                </Button>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/anil-kumar-840800223"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/sravananil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="mailto:sravananil75@gmail.com"
                    className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ID Card for Mobile */}
          <motion.div
            className="flex items-center justify-center pb-12 pt-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <IDCard className="scale-75" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.section>

      {/* Education Section - Enhanced with Unique Graphics */}
      <section className="py-16 md:py-32 px-4 md:px-6 bg-black relative overflow-hidden">
        {/* Dynamic Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid Pattern */}
          <motion.div 
            className="absolute inset-0 opacity-10"
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: 'linear'
            }}
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
          
          {/* Floating Geometric Shapes */}
          <motion.div
            className="absolute top-20 left-10 w-4 h-4 bg-blue-500/30 rotate-45"
            animate={{ 
              y: [0, -20, 0],
              rotate: [45, 135, 45],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-32 right-20 w-6 h-6 bg-purple-500/20 rounded-full"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute bottom-40 left-32 w-3 h-3 bg-green-500/40 rotate-45"
            animate={{ 
              rotate: [45, 405],
              scale: [1, 0.5, 1]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Glowing Orbs */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-24 h-24 bg-gradient-to-r from-green-500/5 to-cyan-500/5 rounded-full blur-xl"
            animate={{ 
              scale: [1.2, 0.8, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header with Special Effects */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24 relative"
          >
            <motion.div
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              viewport={{ once: true }}
            />
            
            <h2 className="text-5xl md:text-7xl mb-8 font-light tracking-tight relative">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Educational
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Odyssey
              </motion.span>
              
              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '200px' }}
                transition={{ duration: 1.2, delay: 1 }}
                viewport={{ once: true }}
              />
            </h2>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Embarking on a transformative journey through knowledge, innovation, and discovery.
            </motion.p>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Central Timeline Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500 rounded-full z-10"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            />

            {/* Timeline Nodes */}
            <div className="space-y-24">
              {/* Education Entry 1 - High School */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full z-20 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(59, 130, 246, 0.5)',
                        '0 0 40px rgba(59, 130, 246, 0.8)',
                        '0 0 20px rgba(59, 130, 246, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card - Left Side */}
                <motion.div
                  className="w-full md:w-5/12 md:mr-auto pl-20 md:pl-0"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30 backdrop-blur-sm p-4 md:p-8 relative overflow-hidden group hover:border-blue-400/50 transition-all duration-500">
                    {/* Glowing Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ 
                        background: [
                          'linear-gradient(135deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05))',
                          'linear-gradient(135deg, rgba(6, 182, 212, 0.05), rgba(59, 130, 246, 0.05))'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Particle Effects */}
                    <motion.div
                      className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap className="w-7 h-7 text-blue-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            className="text-sm text-blue-400 mb-1 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                          >
                            June 2020 – April 2021
                          </motion.div>
                          <h3 className="text-2xl text-white mb-2 group-hover:text-blue-200 transition-colors">
                            10th Grade
                          </h3>
                          <p className="text-blue-300 font-medium text-lg">
                            Sri Lakshmi High School
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Education Entry 2 - Diploma */}
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full z-20 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(34, 197, 94, 0.5)',
                        '0 0 40px rgba(34, 197, 94, 0.8)',
                        '0 0 20px rgba(34, 197, 94, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
                  />
                </motion.div>

                {/* Content Card - Right Side */}
                <motion.div
                  className="w-full md:w-5/12 md:ml-auto pl-20 md:pl-0"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: -5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30 backdrop-blur-sm p-4 md:p-8 relative overflow-hidden group hover:border-green-400/50 transition-all duration-500">
                    {/* Glowing Background Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      animate={{ 
                        background: [
                          'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))',
                          'linear-gradient(135deg, rgba(16, 185, 129, 0.05), rgba(34, 197, 94, 0.05))'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                    />
                    
                    {/* Particle Effects */}
                    <motion.div
                      className="absolute top-4 left-4 w-2 h-2 bg-green-400 rounded-full"
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap className="w-7 h-7 text-green-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            className="text-sm text-green-400 mb-1 font-medium"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                          >
                            Jan 2021 – May 2024
                          </motion.div>
                          <h3 className="text-2xl text-white mb-2 group-hover:text-green-200 transition-colors">
                            Diploma
                          </h3>
                          <p className="text-green-300 font-medium text-lg">
                            Brindhavan Institute of Technology &amp; Science
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Education Entry 3 - Bachelor's */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-center"
              >
                {/* Timeline Node - Special Current Education Indicator */}
                <motion.div
                  className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full z-20 shadow-lg"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                        '0 0 40px rgba(147, 51, 234, 0.8)',
                        '0 0 60px rgba(147, 51, 234, 1)',
                        '0 0 40px rgba(147, 51, 234, 0.8)',
                        '0 0 20px rgba(147, 51, 234, 0.5)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  {/* Pulsing Ring */}
                  <motion.div
                    className="absolute -inset-2 border-2 border-purple-400/50 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0.2, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content Card - Left Side */}
                <motion.div
                  className="w-full md:w-5/12 md:mr-auto pl-20 md:pl-0"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    z: 50
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm p-4 md:p-8 relative overflow-hidden group hover:border-purple-400/50 transition-all duration-500">
                    {/* Current Education Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                      animate={{ 
                        opacity: [0.1, 0.3, 0.1]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Multiple Particle Effects */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-purple-400 rounded-full"
                        style={{
                          top: `${20 + i * 20}%`,
                          right: `${10 + i * 15}%`
                        }}
                        animate={{ 
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          y: [0, -20, 0]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity,
                          delay: i * 0.5
                        }}
                      />
                    ))}
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <GraduationCap className="w-7 h-7 text-purple-400" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.div
                            className="text-sm text-purple-400 mb-1 font-medium flex items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                          >
                            Aug 2024 – Dec 2027
                            <motion.div
                              className="w-2 h-2 bg-purple-400 rounded-full"
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          </motion.div>
                          <h3 className="text-2xl text-white mb-2 group-hover:text-purple-200 transition-colors">
                            Bachelor of Technology
                          </h3>
                          <p className="text-purple-300 font-medium text-lg mb-2">
                            G Pullaiah College of Engineering & Technology (GPCET)
                          </p>
                          <p className="text-gray-400 text-sm mb-2">
                            Kurnool, Andhra Pradesh
                          </p>
                          <motion.p 
                            className="text-gray-300 text-sm bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-3 py-1 rounded-full inline-block"
                            animate={{ 
                              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{ 
                              duration: 4, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            style={{ backgroundSize: '200% 200%' }}
                          >
                            Computer Science & Artificial Intelligence
                          </motion.p>
                          <p className="text-gray-400 text-xs mt-2">
                            Expected Graduation: December 2027
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Floating Code Snippets */}
          <motion.div
            className="absolute top-20 right-20 text-green-400/10 font-mono text-sm"
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {"<div className='skills' />"}
          </motion.div>
          <motion.div
            className="absolute bottom-32 left-16 text-blue-400/10 font-mono text-sm"
            animate={{ 
              y: [0, 20, 0],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            {"const skills = () => {}"}
          </motion.div>
          
          {/* Animated Circuit Lines */}
          <motion.svg
            className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <circle cx="64" cy="64" r="50" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="64" cy="64" r="30" stroke="currentColor" strokeWidth="1" fill="none" />
            <circle cx="64" cy="64" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
          </motion.svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-8 text-center">
              <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Experiences
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              I build modern web applications with cutting-edge technologies, 
              specializing in full-stack development and generative AI integration. 
              Every project is crafted with precision, performance, and user experience in mind.
            </motion.p>
          </motion.div>

          {/* Core Competencies */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div 
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Code className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl mb-4">Full Stack Development</h3>
              <p className="text-gray-400">React, Node.js, Python, and modern frameworks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div 
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Monitor className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl mb-4">Web Applications</h3>
              <p className="text-gray-400">Responsive, fast, and user-centric designs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <motion.div 
                className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Brain className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl mb-4">AI Integration</h3>
              <p className="text-gray-400">Leveraging generative AI for innovative solutions</p>
            </motion.div>
          </div>

          {/* Skills Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Technical Arsenal
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A comprehensive toolkit spanning modern technologies, frameworks, and AI-powered solutions
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* Programming Languages */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Terminal className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Programming Languages</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Python', 'JavaScript', 'Java', 'HTML', 'CSS'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-blue-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-green-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Settings className="w-6 h-6 text-green-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Frameworks & Libraries</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['React.js', 'Node.js', 'Flask', 'FastAPI', 'Express.js', 'Tailwind CSS', 'Vite', 'Responsive Design'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-green-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Development Tools */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Palette className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Development Tools</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['Git & GitHub', 'VS Code', 'Postman', 'Figma', 'Google Colab', 'npm', 'pip', 'CI/CD'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-purple-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* AI Tools */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-orange-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Cpu className="w-6 h-6 text-orange-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">AI Tools</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['ChatGPT', 'Google AI Studio', 'Midjourney', 'DALL·E', 'Copy.ai'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-orange-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Third Row - Databases & Cloud, Testing, CMS/Platforms */}
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
              
              {/* Databases & Cloud */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Database className="w-6 h-6 text-cyan-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Databases & Cloud</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['SQL', 'H2 Database', 'AWS', 'Vercel', 'Linux CLI'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-cyan-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testing & Automation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-pink-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Testing & Automation</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['API Testing', 'Unit Testing', 'Jest', 'Automation Workflows'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-pink-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CMS & Platforms */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-indigo-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-indigo-500/20 to-violet-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe className="w-6 h-6 text-indigo-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">CMS & Platforms</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {['WordPress', 'REST APIs', 'OpenAI GPT', 'Replicate API'].map((skill, i) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-indigo-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Fourth Row - Soft Skills */}
            <div className="grid lg:grid-cols-1 gap-8 max-w-2xl mx-auto mt-8">

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-3xl p-8 border border-gray-700/50 backdrop-blur-sm hover:border-yellow-500/30 transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Users className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                  <h4 className="text-xl text-white">Soft Skills & Competencies</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'Team Collaboration', icon: Users },
                    { name: 'Time Management', icon: Clock },
                    { name: 'Problem Solving', icon: Target },
                    { name: 'Performance Optimization', icon: TrendingUp }
                  ].map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg hover:bg-yellow-500/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <skill.icon className="w-4 h-4 text-yellow-400" />
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white text-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.1) 2px, transparent 2px),
                radial-gradient(circle at 40% 60%, rgba(147, 51, 234, 0.1) 2px, transparent 2px)
              `,
              backgroundSize: '80px 80px, 100px 100px, 60px 60px'
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

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                AI Innovation
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Showcase
              </motion.span>
            </h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Cutting-edge AI solutions that transform ideas into revolutionary digital experiences. 
              Each project pushes the boundaries of what's possible with artificial intelligence.
            </motion.p>
          </motion.div>

          {/* Projects Grid */}
          <div className="space-y-32">
            
            {/* Project 1 - Shortloom AI */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Visual */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%)
                      `,
                      backgroundSize: '40px 40px'
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 bg-white rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
                    {/* Video Icon with Animation */}
                    <motion.div
                      className="relative mb-6"
                      animate={{
                        rotateY: [0, 360]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Video className="w-12 h-12 text-white" />
                      </div>
                      {/* Orbiting Elements */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full"
                        animate={{
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-2 -left-2 w-4 h-4 bg-orange-400 rounded-full"
                        animate={{
                          rotate: [360, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </motion.div>
                    
                    <h4 className="text-2xl text-gray-800 mb-3">Shortloom AI</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Transforms raw content into viral short-form videos using advanced AI video generation
                    </p>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">AI Video</span>
                      <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">NLP</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Computer Vision</span>
                    </div>
                  </div>
                  
                  {/* Floating Particles */}
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/50 rounded-full"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: `${10 + i * 20}%`
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full border border-red-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Sparkles className="w-4 h-4 text-red-500" />
                    <span className="text-red-700 text-sm">Video AI Solution</span>
                  </motion.div>
                  
                  <h3 className="text-4xl lg:text-5xl tracking-tight">
                    <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                      Shortloom AI
                    </span>
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  AI-powered platform converting 60-min videos into 10 platform-optimized viral shorts automatically. 
                  Using OpenAI Whisper, Claude API, and FFmpeg for viral moment detection and automated generation.
                </p>
                
                {/* Revenue Badge - Highlighted */}
                <motion.div 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: [
                      '0 0 20px rgba(34, 197, 94, 0.3)',
                      '0 0 40px rgba(34, 197, 94, 0.6)',
                      '0 0 20px rgba(34, 197, 94, 0.3)'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <TrendingUp className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">💰 3 Paying Beta Users at $29/month</span>
                </motion.div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl">
                    <Clock className="w-5 h-5 text-red-500" />
                    <div>
                      <div className="text-gray-700 font-semibold">95% Time Saved</div>
                      <div className="text-gray-500 text-xs">6 hours → 20 minutes</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl">
                    <Video className="w-5 h-5 text-orange-500" />
                    <div>
                      <div className="text-gray-700 font-semibold">10 Shorts</div>
                      <div className="text-gray-500 text-xs">Auto-generated</div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="flex gap-4 pt-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button variant="outline" className="border-red-200 text-red-700 hover:bg-red-50 rounded-full px-8 py-3">
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <motion.button
                    onClick={() => handleProjectLike('shortloom')}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className={`w-5 h-5 ${projectLikes.shortloom > 0 ? 'fill-current' : ''}`} />
                    <span className="font-semibold">{projectLikes.shortloom}</span>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Project 2 - OPTIC-GLIDE */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Content - Left Side */}
              <motion.div
                className="space-y-8 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full border border-purple-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Brain className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-700 text-sm">🏆 Flagship AI Project</span>
                  </motion.div>
                  
                  <h3 className="text-4xl lg:text-5xl tracking-tight">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      OPTIC-GLIDE
                    </span>
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  Context-aware AI teaching assistant converting speech to real-time contextual visuals for educators. 
                  Eliminates 15-20 lecture interruptions by using OpenAI Whisper, Claude API, and RAG (LangChain + Pinecone) 
                  to automatically display relevant visuals based on natural speech.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
                    <Zap className="w-5 h-5 text-purple-500" />
                    <div>
                      <div className="text-gray-700 font-semibold">85% Accuracy</div>
                      <div className="text-gray-500 text-xs">Topic detection</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <div>
                      <div className="text-gray-700 font-semibold">&lt;2s Latency</div>
                      <div className="text-gray-500 text-xs">Speech → Display</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl">
                    <Target className="w-5 h-5 text-cyan-500" />
                    <div>
                      <div className="text-gray-700 font-semibold">92% Success</div>
                      <div className="text-gray-500 text-xs">RAG retrieval rate</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                    <Users className="w-5 h-5 text-green-500 mt-1" />
                    <div>
                      <div className="text-gray-700 font-semibold">3 Educators</div>
                      <div className="text-gray-500 text-xs">Real-world tested</div>
                    </div>
                  </div>
                </div>
                
                <motion.div 
                  className="flex gap-4 pt-4 flex-wrap"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Play className="w-4 h-4 mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-3"
                    onClick={() => window.open('https://github.com/sravananil/optic-glide', '_blank')}
                  >
                    <Code className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <motion.button
                    onClick={() => handleProjectLike('opticglide')}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className={`w-5 h-5 ${projectLikes.opticglide > 0 ? 'fill-current' : ''}`} />
                    <span className="font-semibold">{projectLikes.opticglide}</span>
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Visual - Right Side */}
              <motion.div
                className="relative lg:order-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Animated Mesh Background */}
                  <motion.div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          0deg,
                          rgba(255,255,255,0.1) 0px,
                          rgba(255,255,255,0.1) 2px,
                          transparent 2px,
                          transparent 20px
                        ),
                        repeating-linear-gradient(
                          90deg,
                          rgba(255,255,255,0.1) 0px,
                          rgba(255,255,255,0.1) 2px,
                          transparent 2px,
                          transparent 20px
                        )
                      `
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 bg-white rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
                    {/* Brain/AI Icon with Pulse Effect */}
                    <motion.div
                      className="relative mb-6"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Brain className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Pulse Effect */}
                      <motion.div
                        className="absolute inset-0 border-2 border-purple-400 rounded-2xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [1, 0.3, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-blue-400 rounded-2xl"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.8, 0.2, 0.8]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      />
                    </motion.div>
                    
                    <h4 className="text-2xl text-gray-800 mb-3">OPTIC-GLIDE</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      AI teaching assistant with speech-to-visual context detection using Claude, Whisper, and RAG
                    </p>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Claude API</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Whisper</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">LangChain</span>
                      <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm">Pinecone</span>
                    </div>
                  </div>
                  
                  {/* Floating Tech Elements */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-white/60 rounded-full"
                      style={{
                        top: `${15 + i * 20}%`,
                        right: `${5 + i * 15}%`
                      }}
                      animate={{
                        x: [0, 15, 0],
                        opacity: [0.4, 1, 0.4],
                        scale: [0.6, 1, 0.6]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.7
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Project 3 - Copyad AI */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Visual */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 rounded-3xl p-8 shadow-2xl overflow-hidden">
                  {/* Animated Text Pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Ctext x='5' y='15' font-size='12' font-family='monospace'%3EAI%3C/text%3E%3Ctext x='5' y='35' font-size='8' font-family='monospace'%3ECOPY%3C/text%3E%3C/g%3E%3C/svg%3E")`
                    }}
                    animate={{
                      backgroundPosition: ['0px 0px', '40px 40px', '0px 0px']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 bg-white rounded-2xl p-8 h-80 flex flex-col items-center justify-center">
                    {/* Writing Icon with Animation */}
                    <motion.div
                      className="relative mb-6"
                    >
                      <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <Edit3 className="w-12 h-12 text-white" />
                      </div>
                      
                      {/* Writing Effect */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center"
                        animate={{
                          rotate: [0, 15, -15, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Zap className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                    
                    <h4 className="text-2xl text-gray-800 mb-3">Copyad AI</h4>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Intelligent content generator for high-converting ad copies and social media content
                    </p>
                    
                    {/* Tech Stack Badges */}
                    <div className="flex gap-2 mt-4 flex-wrap justify-center">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">NLP</span>
                      <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">GPT Models</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Content AI</span>
                    </div>
                  </div>
                  
                  {/* Floating Writing Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${10 + i * 12}%`,
                        left: `${5 + (i % 2) * 80}%`,
                        width: '20px',
                        height: '2px',
                        background: 'rgba(255,255,255,0.4)',
                        borderRadius: '1px'
                      }}
                      animate={{
                        scaleX: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="space-y-4">
                  <motion.div 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Edit3 className="w-4 h-4 text-purple-500" />
                    <span className="text-purple-700 text-sm">Content Generation</span>
                  </motion.div>
                  
                  <h3 className="text-4xl lg:text-5xl tracking-tight">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      Copyad AI
                    </span>
                  </h3>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  An intelligent content generator crafted for writing high-converting ad copies, social media captions, 
                  and product descriptions. It quickly understands product tone and target audience to produce effective text in seconds.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span className="text-gray-700">Smart Writing</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-50 to-indigo-50 rounded-xl">
                    <Zap className="w-5 h-5 text-pink-500" />
                    <span className="text-gray-700">Instant Results</span>
                  </div>
                </div>
                
                <motion.div 
                  className="flex gap-4 pt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Try Generator
                  </Button>
                  <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 rounded-full px-8 py-3">
                    <Code className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 text-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Experience
              </motion.span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200 relative overflow-hidden group hover:shadow-2xl transition-all duration-500"
          >
            {/* Background Effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-3xl text-gray-900 mb-2 md:mb-0">Software Development Intern</h3>
                    <span className="text-blue-600 px-4 py-1 bg-blue-50 rounded-full text-sm inline-block w-fit">
                      Recent · ~2-3 months
                    </span>
                  </div>
                  <p className="text-xl text-blue-600 mb-2">Oasis Infobyte</p>
                  <p className="text-sm text-gray-500 mb-6">Remote · Backend Development Focus</p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Delivered 8 features in 2 months</strong> in a distributed team environment across 3 time zones, maintaining high velocity while ensuring code quality
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Achieved zero rollbacks</strong> across 8 production releases through rigorous testing, code reviews, and deployment discipline
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">
                        <strong>Reduced incidents by 30%</strong> through improved debugging practices, comprehensive error handling, and proactive monitoring
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-700 leading-relaxed">
                        Participated in daily standups, sprint planning, and code reviews following Agile development practices with Git version control
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Technical Projects Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-50 to-white text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-green-900 to-cyan-900 bg-clip-text text-transparent">
                Technical
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Projects
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-stack applications demonstrating expertise in REST APIs, cloud deployment, and automation
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project 1 - Automated Video Processing */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Video className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-2xl text-gray-900 mb-3">Automated Video Processing</h3>
              <p className="text-sm text-blue-600 mb-4">June 2025 – July 2025</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Full-stack web application with Flask backend and React frontend for automated video content processing
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Designed automated workflow using MoviePy library</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Handles large file operations without blocking main flow</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Optimized logic to handle up to 500MB files efficiently</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">Flask</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-cyan-50 text-cyan-700 rounded-full text-xs">REST APIs</span>
              </div>
            </motion.div>

            {/* Project 2 - Multi-LLM Cost Optimizer */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-purple-300 transition-all duration-500 group"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Cpu className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-2xl text-gray-900 mb-3">Multi-LLM Cost Optimizer</h3>
              <p className="text-sm text-purple-600 mb-4">GenAI Platform · Production</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Intelligent routing platform between GPT-4, Claude, and Gemini based on query complexity for optimal cost-performance balance
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600"><strong>40% cost reduction</strong> through intelligent model selection</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600"><strong>200+ concurrent requests</strong> handling capacity</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600"><strong>&lt;1s response time</strong> with Redis caching layer</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">FastAPI</span>
                <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">OpenAI</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs">Claude</span>
                <span className="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-xs">Redis</span>
              </div>
              
              {/* Like Button */}
              <motion.button
                onClick={() => handleProjectLike('project3')}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className={`w-4 h-4 ${projectLikes.project3 > 0 ? 'fill-current' : ''}`} />
                <span className="font-semibold">Like This Project · {projectLikes.project3}</span>
              </motion.button>
            </motion.div>

            {/* Project 3 - Automated Script Generation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:border-green-300 transition-all duration-500 group"
            >
              <motion.div
                className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Terminal className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-2xl text-gray-900 mb-3">Automated Script Generation</h3>
              <p className="text-sm text-green-600 mb-4">AI-Powered System</p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Backend service integrating GPT API for text-to-speech synthesis with structured workflows
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Request queuing system to manage API quotas</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Applied output optimization for format consistency</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-600">Reduced manual steps by 95% through batch processing</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">Python</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">Flask</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs">OpenAI API</span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs">REST APIs</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50 text-black relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.2) 2px, transparent 2px),
                radial-gradient(circle at 80% 70%, rgba(59, 130, 246, 0.2) 2px, transparent 2px)
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-yellow-900 to-orange-900 bg-clip-text text-transparent">
                Professional
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Certifications
              </motion.span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications validating technical expertise and professional competency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Certification 1 - JPMorgan Chase */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert1: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert1: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert1} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://www.jpmorgan.com/content/dam/jpm/global/images/JPMorgan_Logo_London_building.jpg" 
                  alt="JPMorgan Chase"
                  className="h-20 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">JPMorgan Chase</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Software Engineering Simulation
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>via Forage</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/posts/anil-kumar-chakali-840800223_jpmorgan-chase-cosoftware-engvirtual-experience-activity-7397569745845178369-oq5N?utm_source=share&utm_medium=member_desktop"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Certification 2 - AWS Solutions Architecture */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-orange-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert2: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert2: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert2} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 0.5
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">AWS APAC</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Solutions Architecture Job Simulation
                </p>
                <div className="flex items-center gap-2 text-sm text-orange-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>via Forage</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-700 text-white hover:from-orange-600 hover:to-orange-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Certification 3 - AWS Flash */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-purple-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert3: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert3: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert3} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">AWS Flash</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Automating with AI/ML for Small Business Owners
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Certification</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Certification 4 - Electronic Arts */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-red-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert4: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert4: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert4} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-red-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1.5
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://yt3.googleusercontent.com/fMaAQbgRCPxCgz4-BWlmV1529oLOJLDdE-c8LuQz-W-3-eZ36GtT7wcqb8i_Am8YQonUaECT8Q=s900-c-k-c0x00ffffff-no-rj" 
                  alt="Electronic Arts"
                  className="h-20 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">Electronic Arts</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Software Engineering Simulation
                </p>
                <div className="flex items-center gap-2 text-sm text-red-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>via Forage</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/posts/anil-kumar-chakali-840800223_electronics-arts-software-engineering-job-activity-7411992352304631808-i0OI?utm_source=share&utm_medium=member_desktop&rcm=ACoAADgulLABRHXc35Q-JsKeTH6RV-oQziH3kck"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-red-500 to-red-700 text-white hover:from-red-600 hover:to-red-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Certification 5 - AWS Cloud Practitioner */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-cyan-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert5: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert5: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert5} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-cyan-50 to-cyan-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">AWS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  AWS Cloud Practitioner
                </p>
                <div className="flex items-center gap-2 text-sm text-cyan-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Certification</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-cyan-700 text-white hover:from-cyan-600 hover:to-cyan-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

            {/* Certification 6 - AWS Technical Essentials */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl hover:border-green-300 transition-all duration-500 group relative overflow-hidden"
              onMouseEnter={() => setConfettiActive(prev => ({ ...prev, cert6: true }))}
              onMouseLeave={() => setConfettiActive(prev => ({ ...prev, cert6: false }))}
            >
              {/* Confetti Effect */}
              <Confetti isActive={confettiActive.cert6} />
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  x: ['-100%', '100%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2.5
                }}
              />
              
              {/* Company Logo Header */}
              <div className="relative h-32 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center border-b border-gray-200">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" 
                  alt="AWS"
                  className="h-16 w-auto object-contain"
                />
              </div>
              
              <div className="relative z-10 p-8">
                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl text-gray-900 mb-3">AWS</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  AWS Technical Essentials
                </p>
                <div className="flex items-center gap-2 text-sm text-green-600 mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Certification</span>
                </div>
                
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white hover:from-green-600 hover:to-green-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <Award className="w-4 h-4 mr-2" />
                    View Certificate
                  </Button>
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px'
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mx-auto" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                Quantifiable
              </span>
              <br />
              <motion.span 
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Achievements
              </motion.span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Impact-driven results demonstrating technical excellence and problem-solving capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Achievement 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-2xl p-8 text-center hover:border-blue-400/50 transition-all duration-500 group"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <TrendingUp className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h3 
                className="text-5xl text-cyan-400 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                95%
              </motion.h3>
              <p className="text-gray-300">
                Reduction in manual processing steps through automation
              </p>
            </motion.div>

            {/* Achievement 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-2xl p-8 text-center hover:border-green-400/50 transition-all duration-500 group"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Rocket className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h3 
                className="text-5xl text-green-400 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                30%
              </motion.h3>
              <p className="text-gray-300">
                Bug reduction through improved debugging and testing practices
              </p>
            </motion.div>

            {/* Achievement 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 text-center hover:border-purple-400/50 transition-all duration-500 group"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Zap className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h3 
                className="text-5xl text-purple-400 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                15→3
              </motion.h3>
              <p className="text-gray-300">
                User actions reduced from 15 to 3 through automated workflows
              </p>
            </motion.div>

            {/* Achievement 4 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-2xl p-8 text-center hover:border-orange-400/50 transition-all duration-500 group"
            >
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Database className="w-10 h-10 text-white" />
              </motion.div>
              <motion.h3 
                className="text-5xl text-orange-400 mb-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                500MB
              </motion.h3>
              <p className="text-gray-300">
                Optimized file handling capacity for large-scale operations
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-8">Let's Create Something Amazing</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project and build something extraordinary together.
            </p>
            
            <div className="flex flex-col gap-6 items-center justify-center">
              <div className="flex flex-col sm:flex-row gap-4 items-center">
                <Button 
                  onClick={() => window.location.href = 'mailto:sravananil75@gmail.com'}
                  className="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full text-lg transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </Button>
                
                <motion.button
                  onClick={() => setIsFeedbackDialogOpen(true)}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-lg flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageSquare className="w-5 h-5" />
                  Feedback from You
                </motion.button>
              </div>
              
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/anil-kumar-840800223"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com/sravananil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:sravananil75@gmail.com"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="tel:+919494500548"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feedback Posts Section */}
      <FeedbackPosts posts={feedbackPosts} onLike={handlePostLike} />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>&copy; 2025 Anil Kumar. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}