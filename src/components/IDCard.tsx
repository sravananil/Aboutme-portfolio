import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Badge } from './ui/badge';
import profileImage from 'figma:asset/be510e2f1a65aab62392dd4a7955541e17c6f963.png';

interface IDCardProps {
  className?: string;
}

export function IDCard({ className = "" }: IDCardProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Professional Retractable Badge Holder - Moved Higher */}
      <motion.div
        className="absolute -top-20 left-1/2 transform -translate-x-1/2 -translate-y-full"
        animate={{ 
          rotate: [-1, 1, -1],
          x: [-1, 1, -1]
        }}
        transition={{
          rotate: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Retractable Badge Reel Housing */}
        <div className="relative">
          {/* Main Housing - Professional Badge Reel */}
          <div className="w-16 h-16 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-full shadow-2xl border-2 border-gray-600 relative overflow-hidden">
            {/* Housing Details */}
            <div className="absolute inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full">
              {/* Center Logo/Brand */}
              <div className="absolute inset-3 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-400 rounded-full relative">
                  <div className="absolute inset-0.5 bg-blue-300 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              </div>
              
              {/* Housing Ring Details */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-500 rounded-full"></div>
            </div>
            
            {/* Metallic Highlights */}
            <div className="absolute top-1 left-2 w-3 h-6 bg-white/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1 right-2 w-2 h-4 bg-black/30 rounded-full blur-sm"></div>
            
            {/* Belt Clip */}
            <div className="absolute -top-1 -right-2 w-6 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border border-gray-500 shadow-lg transform rotate-12">
              <div className="absolute top-1 left-1 w-4 h-2 bg-gray-400 rounded"></div>
              <div className="absolute bottom-1 left-1 w-4 h-2 bg-gray-400 rounded"></div>
              <div className="absolute inset-x-1 top-4 bottom-4 bg-gradient-to-b from-gray-500 to-gray-700 rounded"></div>
            </div>
          </div>
          
          {/* Retractable Cord/Cable - Extended Length */}
          <motion.div
            className="absolute top-full left-1/2 transform -translate-x-1/2 origin-top"
            animate={{ 
              scaleY: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Main Retractable Cord - Longer for higher position */}
            <div className="w-1 h-64 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600 relative shadow-md">
              {/* Cord Spiral Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent bg-[rgba(255,251,251,0)] rounded-[0px] p-[0px]"></div>
              {/* Coil Effect Lines - More lines for longer cord */}
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1.5 h-0.5 bg-gray-400/60 left-1/2 transform -translate-x-1/2"
                  style={{ top: `${i * 6 + 4}%` }}
                />
              ))}
            </div>
            
            {/* Cord End Cap */}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gradient-to-b from-gray-500 to-gray-700 rounded-full border border-gray-400 shadow-lg">
              <div className="absolute inset-0.5 bg-gray-400 rounded-full"></div>
            </div>
          </motion.div>
          
          {/* Professional Swivel Hook/Connector - Adjusted for longer cord */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 translate-y-64">
            {/* Swivel Connector Base */}
            <div className="w-6 h-8 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg border border-gray-500 shadow-xl relative">
              {/* Swivel Ring */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 border-2 border-gray-500 rounded-full bg-gradient-to-br from-gray-400 to-gray-600">
                <div className="absolute inset-0.5 border border-gray-400 rounded-full"></div>
              </div>
              
              {/* Connector Body Details */}
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-gray-500 rounded-full"></div>
              
              {/* Side Screws */}
              <div className="absolute top-2 left-0.5 w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="absolute top-2 right-0.5 w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            
            {/* Heavy-Duty Snap Hook */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1">
              {/* Hook Body */}
              <div className="w-5 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg border border-gray-600 shadow-xl relative">
                {/* Hook Opening */}
                <div className="absolute top-2 right-0 w-2 h-6 bg-gradient-to-l from-gray-600 to-gray-800 rounded-r-lg">
                  <div className="absolute top-1 right-0.5 w-1 h-4 bg-gray-500 rounded-full"></div>
                </div>
                
                {/* Hook Gate/Spring */}
                <motion.div
                  className="absolute top-3 right-0.5 w-1.5 h-4 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full origin-bottom"
                  animate={{ 
                    rotateZ: [0, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="absolute inset-0.5 bg-blue-300 rounded-full"></div>
                </motion.div>
                
                {/* Hook Reinforcement */}
                <div className="absolute top-1 left-1 w-3 h-1 bg-gray-500 rounded-full"></div>
                <div className="absolute bottom-1 left-1 w-3 h-1 bg-gray-500 rounded-full"></div>
                
                {/* Professional Grade Markings */}
                <div className="absolute top-6 left-0.5 w-4 h-0.5 bg-gray-400/60 rounded-full"></div>
                <div className="absolute top-7 left-1 w-3 h-0.5 bg-gray-400/40 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ID Card */}
      <motion.div
        drag
        dragConstraints={{
          top: -120,
          left: -250,
          right: 120,
          bottom: 120,
        }}
        dragElastic={0.2}
        dragTransition={{ 
          bounceStiffness: 120, 
          bounceDamping: 30,
          power: 0.15
        }}
        whileDrag={{ 
          scale: 1.03, 
          rotate: [0, 2, -1.5, 1],
          boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.7), 0 0 50px rgba(59, 130, 246, 0.4)",
          zIndex: 50
        }}
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 25px 45px -12px rgba(0, 0, 0, 0.5), 0 0 35px rgba(59, 130, 246, 0.2)",
          transition: { duration: 0.3 }
        }}
        initial={{ 
          y: 0,
          rotate: -1.5,
          boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 30px rgba(59, 130, 246, 0.15)"
        }}
        animate={{ 
          y: [-3, 3, -3],
          rotate: [-1.5, 0.8, -1.5]
        }}
        transition={{
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          type: "spring",
          stiffness: 160,
          damping: 25
        }}
        className="
          w-80 h-52 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
          rounded-2xl p-6 cursor-grab active:cursor-grabbing
          border border-gray-600/60 backdrop-blur-lg
          relative overflow-hidden
        "
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
          `
        }}
      >
        {/* Card Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-white/90 text-xs tracking-wider uppercase">TechCorp</h3>
            <p className="text-blue-400 text-xs">Software Engineering</p>
          </div>
          <div className="text-right">
            <p className="text-white/60 text-xs">ID: SE-2024-001</p>
            <div className="w-8 h-8 bg-blue-500/20 rounded-full mt-1 flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-4 mb-4">
          {/* Profile Photo */}
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-400/30 bg-gradient-to-br from-blue-500/20 to-purple-500/20">
              <img
                src={profileImage}
                alt="Anil Kumar"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status Indicator */}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-900"></div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <h2 className="text-white text-lg tracking-tight mb-1">Anil Kumar</h2>
            <p className="text-blue-300 text-sm mb-2">Full Stack Developer</p>
            <div className="flex flex-wrap gap-1">
              <Badge className="bg-yellow-500/20 text-yellow-300 text-xs px-2 py-0.5 hover:bg-yellow-500/30">
                Python
              </Badge>
              <Badge className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-0.5 hover:bg-cyan-500/30">
                React
              </Badge>
              <Badge className="bg-purple-500/20 text-purple-300 text-xs px-2 py-0.5 hover:bg-purple-500/30">
                AI/ML
              </Badge>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-end text-xs">
          <div>
            <p className="text-white/60">Valid Until</p>
            <p className="text-white/80">Dec 2025</p>
          </div>
          <div className="text-right">
            <p className="text-white/60">Level</p>
            <p className="text-green-400">Senior</p>
          </div>
        </div>

        {/* Holographic Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent transform -skew-x-12 translate-x-full opacity-0 animate-shimmer"></div>
        
        {/* Additional Glow Effects */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-sm opacity-60"></div>

        {/* NFC Chip Simulation */}
        <div className="absolute bottom-4 right-4 w-6 h-6 border border-white/20 rounded-sm bg-white/5 flex items-center justify-center">
          <div className="w-3 h-3 border border-white/30 rounded-sm bg-gradient-to-br from-yellow-400/30 to-orange-400/30"></div>
        </div>

        {/* Professional Attachment Point */}
        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full border-2 border-gray-600 shadow-lg">
          {/* Inner Ring */}
          <div className="absolute inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full">
            {/* Center Hole */}
            <div className="absolute inset-1.5 bg-black rounded-full shadow-inner">
              <div className="absolute inset-0.5 bg-gray-900 rounded-full"></div>
            </div>
          </div>
          {/* Metal Grommet Highlight */}
          <div className="absolute top-0.5 left-1 w-1.5 h-1.5 bg-white/30 rounded-full blur-sm"></div>
          <div className="absolute bottom-0.5 right-1 w-1 h-1 bg-black/40 rounded-full blur-sm"></div>
        </div>
      </motion.div>
    </div>
  );
}