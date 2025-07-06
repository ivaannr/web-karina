
import { Header } from "@/components/Header";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SpecialDaysBox } from "@/components/SpecialDaysBox";
import { Quiz } from "@/components/Quiz";
import { SongsSection } from "@/components/SongsSection";
import { BucketList } from "@/components/BucketList";
import { Slideshow } from "@/components/Slideshow";
import { CouplesSection } from "@/components/CouplesSection";
import { LoveReasons } from "@/components/LoveReasons";
import { DreamsSection } from "@/components/DreamsSection";
import { FinalMessage } from "@/components/FinalMessage";
import { RelationshipProvider } from "@/context/RelationshipContext";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <RelationshipProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-6">
            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-lg font-semibold shadow animate-fade-in">
              Juntos desde el 7 de marzo de 2024
            </span>
          </div>
          <PhotoGallery />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <SpecialDaysBox />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <Quiz />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <SongsSection />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <BucketList />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <Slideshow />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <CouplesSection />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <LoveReasons />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <DreamsSection />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <FinalMessage />
          <div className="my-12">
            <Separator className="max-w-4xl mx-auto bg-gradient-to-r from-transparent via-love-pink to-transparent h-0.5" />
          </div>
          <footer className="text-center py-8 text-sm text-muted-foreground mt-12">
            <p>❤️ Creado con amor para nosotros ❤️</p>
          </footer>
        </div>
      </div>
    </RelationshipProvider>
  );
};

export default Index;
