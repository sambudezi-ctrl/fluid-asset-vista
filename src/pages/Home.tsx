import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function Home() {
  const features = [
    {
      title: 'Fast Performance',
      description: 'Powered by Vite for lightning-fast development and optimized production builds.',
      icon: Zap,
      color: 'text-yellow-500',
    },
    {
      title: 'Secure by Design',
      description: 'Built-in security best practices to keep your data safe and sound.',
      icon: Shield,
      color: 'text-blue-500',
    },
    {
      title: 'Global Scale',
      description: 'Deploy anywhere with edge-ready architecture and global CDN support.',
      icon: Globe,
      color: 'text-green-500',
    },
  ];

  return (
    <div className="space-y-24 pb-12">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="px-4 py-1.5 mb-6 rounded-full border-primary/20 bg-primary/5 text-primary animate-pulse">
              <Sparkles className="h-3.5 w-3.5 mr-2" />
              New: React 19 Support
            </Badge>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground/80 to-muted-foreground leading-[1.1]">
              Build your next idea <br /> with modern precision
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              The ultimate starter template for high-performance React applications. 
              Everything you need to go from concept to production.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Button size="lg" className="rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base font-semibold">
              View Documentation
            </Button>
          </motion.div>
        </div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 relative rounded-2xl border bg-card shadow-2xl overflow-hidden aspect-[16/9] max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
          <div className="flex h-full items-center justify-center">
            <div className="p-8 text-center space-y-4">
              <div className="h-16 w-16 bg-muted rounded-full mx-auto animate-bounce flex items-center justify-center">
                <div className="h-8 w-8 bg-primary rounded-full" />
              </div>
              <p className="text-muted-foreground font-medium">Dashboard Preview Placeholder</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <Card className="h-full border-none bg-muted/30 hover:bg-muted/50 transition-colors shadow-none">
              <CardContent className="p-8 space-y-4 text-center">
                <div className={cn("inline-flex p-3 rounded-2xl bg-background shadow-sm mb-2", feature.color)}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="rounded-3xl bg-primary text-primary-foreground p-12 text-center space-y-8 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ready to ship your next project?</h2>
          <p className="text-primary-foreground/80 text-lg">
            Join thousands of developers building amazing things with Dala.
          </p>
          <Button size="lg" variant="secondary" className="rounded-full px-8 h-12 text-base font-semibold">
            Start Building Now
          </Button>
        </div>
      </section>
    </div>
  );
}
