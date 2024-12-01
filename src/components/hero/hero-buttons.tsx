import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CaretRight } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

export function HeroButtons() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
    >
      <Button 
        size="lg" 
        className="min-w-[200px] h-12 rounded-full bg-black text-white hover:bg-black/90 text-base"
        onClick={() => navigate('/register')}
      >
        Get Started <CaretRight className="ml-2 h-4 w-4" weight="bold" />
      </Button>
      <Button 
        variant="outline" 
        size="lg" 
        className="min-w-[200px] h-12 rounded-full border-neutral-200 hover:bg-neutral-50 text-base"
        onClick={() => navigate('/about')}
      >
        Learn More
      </Button>
    </motion.div>
  );
}