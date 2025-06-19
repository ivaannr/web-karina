
import { Header } from "@/components/Header";
import { PhotoGallery } from "@/components/PhotoGallery";
import { SpecialDaysBox } from "@/components/SpecialDaysBox";
import { RelationshipProvider } from "@/context/RelationshipContext";

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
          <SpecialDaysBox />
          <footer className="text-center py-8 text-sm text-muted-foreground mt-12">
            <p>❤️ Creado con amor para nosotros ❤️</p>
          </footer>
        </div>
      </div>
    </RelationshipProvider>
  );
};

export default Index;
