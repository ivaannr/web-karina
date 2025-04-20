
import { Header } from "@/components/Header";
import { SpecialMoments } from "@/components/SpecialMoments";
import { Timeline } from "@/components/Timeline";
import { RelationshipProvider } from "@/context/RelationshipContext";

const Index = () => {
  return (
    <RelationshipProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <SpecialMoments />
          <Timeline />
          
          <footer className="text-center py-8 text-sm text-muted-foreground mt-12">
            <p>❤️ Creado con amor para nosotros ❤️</p>
          </footer>
        </div>
      </div>
    </RelationshipProvider>
  );
};

export default Index;

