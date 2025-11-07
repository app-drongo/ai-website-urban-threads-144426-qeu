'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sparkles,
  TrendingUp,
  Tag,
  Leaf,
  Ruler,
  Truck,
  Instagram,
  Heart,
  Users,
} from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  badge: 'Shop Collections',
  mainTitle: 'Discover Your Perfect Style',
  mainTitleHighlight: 'Curated for You',
  mainDescription:
    'Explore our carefully selected collections featuring the latest trends, timeless classics, and sustainable fashion choices for the modern professional.',
  feature1Title: 'New Arrivals',
  feature1Description:
    'Fresh styles added weekly. Be the first to discover the latest trends in sustainable professional wear.',
  feature1Badge: 'Latest',
  feature2Title: 'Best Sellers',
  feature2Description:
    'Customer favorites that combine style, comfort, and sustainability. These pieces are loved by professionals worldwide.',
  feature2Badge: 'Popular',
  feature3Title: 'Sale Items',
  feature3Description:
    'Premium fashion at unbeatable prices. Up to 50% off selected items from previous seasons.',
  feature3Badge: 'Save',
  feature4Title: 'Sustainable Line',
  feature4Description:
    'Our eco-conscious collection made from recycled materials and ethical manufacturing processes.',
  feature4Badge: 'Eco',
  feature5Title: 'Size Guide',
  feature5Description:
    'Find your perfect fit with our comprehensive sizing guide and virtual fitting assistant.',
  feature5Badge: 'Fit',
  feature6Title: 'Free Shipping',
  feature6Description:
    'Complimentary shipping on all orders over $75. Fast, secure, and carbon-neutral delivery.',
  feature6Badge: 'Delivery',
  feature7Title: 'Instagram Community',
  feature7Description:
    'See how our customers style their Urban Threads pieces. Tag us for a chance to be featured!',
  feature7Badge: 'Social',
  feature8Title: 'Wishlist & Favorites',
  feature8Description:
    'Save items you love and get notified when they go on sale or come back in stock.',
  feature8Badge: 'Save',
  feature9Title: 'Style Community',
  feature9Description:
    'Join thousands of professionals sharing styling tips, outfit inspiration, and sustainable fashion advice.',
  feature9Badge: 'Connect',
  ctaQuestion: 'Ready to elevate your professional wardrobe?',
  primaryCTA: 'Browse Collections',
  primaryCTAHref: '/collections',
  secondaryCTA: 'View Size Guide',
  secondaryCTAHref: '/size-guide',
  instagramFeedTitle: 'Style Inspiration',
  instagramFeedSubtitle: 'See how our community styles Urban Threads',
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const features = [
    {
      icon: Sparkles,
      title: config.feature1Title,
      description: config.feature1Description,
      badge: config.feature1Badge,
    },
    {
      icon: TrendingUp,
      title: config.feature2Title,
      description: config.feature2Description,
      badge: config.feature2Badge,
    },
    {
      icon: Tag,
      title: config.feature3Title,
      description: config.feature3Description,
      badge: config.feature3Badge,
    },
    {
      icon: Leaf,
      title: config.feature4Title,
      description: config.feature4Description,
      badge: config.feature4Badge,
    },
    {
      icon: Ruler,
      title: config.feature5Title,
      description: config.feature5Description,
      badge: config.feature5Badge,
    },
    {
      icon: Truck,
      title: config.feature6Title,
      description: config.feature6Description,
      badge: config.feature6Badge,
    },
    {
      icon: Instagram,
      title: config.feature7Title,
      description: config.feature7Description,
      badge: config.feature7Badge,
    },
    {
      icon: Heart,
      title: config.feature8Title,
      description: config.feature8Description,
      badge: config.feature8Badge,
    },
    {
      icon: Users,
      title: config.feature9Title,
      description: config.feature9Description,
      badge: config.feature9Badge,
    },
  ];

  // Mock Instagram feed data
  const instagramPosts = [
    {
      id: 1,
      imageUrl:
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop',
      alt: 'Professional outfit styled by @sarah_styles',
      username: '@sarah_styles',
    },
    {
      id: 2,
      imageUrl:
        'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400&auto=format&fit=crop',
      alt: 'Sustainable fashion look by @eco_emma',
      username: '@eco_emma',
    },
    {
      id: 3,
      imageUrl:
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=400&auto=format&fit=crop',
      alt: 'Office chic styling by @workwear_warrior',
      username: '@workwear_warrior',
    },
    {
      id: 4,
      imageUrl:
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400&auto=format&fit=crop',
      alt: 'Weekend professional look by @style_maven',
      username: '@style_maven',
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
      data-editable="features"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <span data-editable="badge">{config.badge}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="mainTitle">{config.mainTitle}</span>
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              <span data-editable="mainTitleHighlight">{config.mainTitleHighlight}</span>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="mainDescription">{config.mainDescription}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <span data-editable={`feature${index + 1}Badge`}>{feature.badge}</span>
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    <span data-editable={`feature${index + 1}Title`}>{feature.title}</span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    <span data-editable={`feature${index + 1}Description`}>
                      {feature.description}
                    </span>
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border - pointer-events-none allows clicks to pass through */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            );
          })}
        </div>

        {/* Instagram Feed Integration */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              <span data-editable="instagramFeedTitle">{config.instagramFeedTitle}</span>
            </h3>
            <p className="text-muted-foreground">
              <span data-editable="instagramFeedSubtitle">{config.instagramFeedSubtitle}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map(post => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-lg aspect-square"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 right-2">
                  <div className="bg-background/90 rounded px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {post.username}
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <Instagram className="size-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6">
            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open('https://instagram.com/urbanthreads', '_blank')}
            >
              <Instagram className="size-4" />
              Follow @urbanthreads
            </Button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            <span data-editable="ctaQuestion">{config.ctaQuestion}</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="px-6 py-3"
              onClick={() => navigate(config.primaryCTAHref)}
              data-editable-href="primaryCTAHref"
              data-href={config.primaryCTAHref}
            >
              <span data-editable="primaryCTA">{config.primaryCTA}</span>
            </Button>
            <Button
              variant="outline"
              className="px-6 py-3"
              onClick={() => navigate(config.secondaryCTAHref)}
              data-editable-href="secondaryCTAHref"
              data-href={config.secondaryCTAHref}
            >
              <span data-editable="secondaryCTA">{config.secondaryCTA}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
