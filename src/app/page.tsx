"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplitDoubleCarousel from "@/components/sections/hero/HeroSplitDoubleCarousel";
import FeatureBento from "@/components/sections/feature/FeatureBento";
import FeatureCardTwentySix from "@/components/sections/feature/FeatureCardTwentySix";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Sparkles, Search, ArrowUpRight, Monitor, Shield, Zap, Puzzle, TrendingUp, Lock, Phone, MessageCircle, BookOpen, Tv, Camera, Music, Settings, Award, Users } from "lucide-react";

export default function WebAgency2Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="none"
      cardStyle="glass-elevated"
      primaryButtonStyle="metallic"
      secondaryButtonStyle="glass"
      headingFontWeight="medium"
    >
      <ReactLenis root>
        <NavbarLayoutFloatingOverlay
          brandName="Megafon Dijital"
          navItems={[
            { name: "Hizmetler", id: "services" },
            { name: "Referanslar", id: "work" },
            { name: "Hakkımızda", id: "about" },
            { name: "İletişim", id: "contact" },
          ]}
          button={{ text: "Randevu Alın", href: "#contact" }}
        />
        <HeroSplitDoubleCarousel
          title="Dijitaldeki Sesiniz: Megafon Dijital"
          description="Markanızın çevrimiçi varlığını dönüştüren çarpıcı web tasarımları ve etkili dijital stratejilerle müşterilerinizi dönüştürün."
          tag="İzmir Merkezli Dijital Ajans"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "canvas-reveal" }}
          buttons={[
            { text: "Projenizi Başlatın", href: "#contact" },
            { text: "Çalışmalarımızı Görün", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          carouselPosition="right"
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/monitor-with-management-graph-it-standing-empty-startup-company-office-business-meeting-ready-financial-work-workplace-with-modern-furniture-concept-corporation-job_482257-27806.jpg", imageAlt: "Modern Web Sitesi Tasarımı" },
            { imageSrc: "http://img.b2bpic.net/free-photo/digital-devices-news_53876-138627.jpg", imageAlt: "Dijital Pazarlama Stratejileri" },
            { imageSrc: "http://img.b2bpic.net/free-photo/social-media-marketing-concept-marketing-with-applications_23-2150063138.jpg", imageAlt: "Sosyal Medya Yönetimi" },
            { imageSrc: "http://img.b2bpic.net/free-photo/keyboard-screen-modern-indoor-sit-analysis_1421-265.jpg", imageAlt: "Mobil Uygulama Arayüzü" },
            { imageSrc: "http://img.b2bpic.net/free-photo/cyber-monday-offer-blue-paper-blanket_23-2147930796.jpg", imageAlt: "E-ticaret Sitesi Geliştirme" },
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/seo-search-engine-optimization-internet-digital-concept_53876-138498.jpg", imageAlt: "SEO Optimizasyonu" },
            { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-woman-creating-vision-board_23-2149934525.jpg", imageAlt: "Marka Kimliği Oluşturma" },
            { imageSrc: "http://img.b2bpic.net/free-photo/female-web-designer-with-papers-notes-office_23-2149749906.jpg", imageAlt: "Kullanıcı Deneyimi Tasarımı" },
            { imageSrc: "http://img.b2bpic.net/free-photo/teamwork-making-online-blog_53876-94868.jpg", imageAlt: "İçerik Pazarlaması" },
          ]}
          carouselItemClassName="!aspect-[4/5]"
        />
        <FeatureBento
          title="Hizmetlerimiz"
          description="Markanızın dijital dünyada öne çıkması için eksiksiz dijital hizmetler sunuyoruz."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          buttons={[{ text: "Tüm Hizmetler", href: "#services" }]}
          buttonAnimation="slide-up"
          features={[
            {
              title: "SEO Optimizasyonu",              description: "Web sitenizi arama motorlarında üst sıralara çıkarıyor, organik trafik sağlıyoruz.",              bentoComponent: "marquee",              centerIcon: Search,
              variant: "text",              texts: ["Anahtar Kelimeler", "Backlink", "Meta Etiketleri", "Organik Trafik", "Sıralamalar", "Analizler", "SERP", "Dizinleme"],
            },
            {
              title: "Web Geliştirme",              description: "Hızlı, duyarlı ve dönüşüm odaklı özel web siteleri inşa ediyoruz.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-holding-disposable-coffee-cup-using-mobile-phone_23-2147972935.jpg", imageAlt: "E-ticaret Sitesi Projesi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-working-with-computer_23-2149930993.jpg", imageAlt: "Kurumsal Web Sitesi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/develop-coding-web-design-coding-web-template_53876-167109.jpg", imageAlt: "Portföy Web Sitesi" },
              ],
            },
            {
              title: "Marka Kimliği",              description: "Kitlenizle rezonans kuran akılda kalıcı bir marka kimliği oluşturun.",              bentoComponent: "media-stack",              items: [
                { imageSrc: "http://img.b2bpic.net/free-photo/people-taking-part-business-event_23-2149346619.jpg", imageAlt: "Marka Stratejisi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-workspace-with-notebooks_23-2148745802.jpg", imageAlt: "Kurumsal Kimlik Rehberi" },
                { imageSrc: "http://img.b2bpic.net/free-photo/idea-concept-with-light-bulb_23-2149105850.jpg", imageAlt: "Logo Tasarımı" },
              ],
            },
          ]}
        />
        <FeatureCardTwentySix
          title="Referanslarımız"
          description="Farklı sektörlerden müşterilerimiz için tasarladığımız projelerden seçmeler."
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Tüm Referansları Görüntüle", href: "#work" }]}
          buttonAnimation="slide-up"
          cardClassName="!h-auto aspect-video"
          features={[
            {
              title: "Lüks Konut Projesi",              description: "Emlak sektörüne özel web sitesi",              imageSrc: "http://img.b2bpic.net/free-photo/female-realtor-with-medical-mask-showing-couple-new-house_23-2148895436.jpg",              imageAlt: "Lüks Konut Sitesi",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Online Eğitim Platformu",              description: "Modern ve etkileşimli eğitim çözümleri",              imageSrc: "http://img.b2bpic.net/free-photo/online-job-search-website-worker-search-job-opportunities_169016-39903.jpg",              imageAlt: "Eğitim Sitesi",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Sağlık Kliniği Yönetimi",              description: "Hasta odaklı klinik web sitesi",              imageSrc: "http://img.b2bpic.net/free-photo/medical-expert-pointing-isolated-chroma-key-display-cabinet_482257-116380.jpg",              imageAlt: "Sağlık Kliniği Sitesi",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Yiyecek Teslimat Uygulaması",              description: "Hızlı ve kullanışlı sipariş platformu",              imageSrc: "http://img.b2bpic.net/free-photo/nutritional-counter-app-concept_23-2149880618.jpg",              imageAlt: "Yiyecek Teslimat Sitesi",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
            {
              title: "Seyahat Acentası Portalı",              description: "Kişiye özel tatil paketleri",              imageSrc: "http://img.b2bpic.net/free-photo/hands-working-digital-device-network-graphic-overlay_53876-123943.jpg",              imageAlt: "Seyahat Acentası Sitesi",              buttonIcon: ArrowUpRight,
              buttonHref: "#"},
          ]}
        />
        <FeatureBento
          title="Megafon Dijital Farkı"
          description="Kendimizden bahseden sonuçlar sunuyoruz."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "Tüm Cihazlara Uyumlu Optimizasyon",              description: "Her ekran boyutunda ve cihazda çarpıcı görünen piksel mükemmelliğinde web siteleri.",              bentoComponent: "phone",              statusIcon: Lock,
              alertIcon: Monitor,
              alertTitle: "Duyarlılık Kontrolü",              alertMessage: "Tüm cihazlara uyumlu",              apps: [
                { name: "Telefon", icon: Phone },
                { name: "SMS", icon: MessageCircle },
                { name: "Kitaplar", icon: BookOpen },
                { name: "TV", icon: Tv },
                { name: "Kamera", icon: Camera },
                { name: "Müzik", icon: Music },
                { name: "Ayarlar", icon: Settings },
                { name: "Sohbet", icon: MessageCircle },
              ],
            },
            {
              title: "Güvenli Barındırma",              description: "Web siteniz için kurumsal düzeyde güvenlik ve %99,9 çalışma süresi.",              bentoComponent: "reveal-icon",              icon: Shield,
            },
            {
              title: "Hızlı Teslimat",              description: "Kaliteden ödün vermeden ortalama 5 iş günü içinde konseptten yayına alma.",              bentoComponent: "timeline",              heading: "Proje Başlangıcı",              subheading: "Ortalama 5 Gün",              items: [
                { label: "Keşif & Çizimler", detail: "Gün 1-2" },
                { label: "Tasarım & Geliştirme", detail: "Gün 3-4" },
                { label: "Test & Yayına Alma", detail: "Gün 5" },
              ],
              completedLabel: "Canlı"},
            {
              title: "Sorunsuz Entegrasyonlar",              description: "Zaten kullandığınız araçlarla bağlantı kurun — CRM'ler, analizler, ödemeler ve daha fazlası.",              bentoComponent: "orbiting-icons",              centerIcon: Puzzle,
              items: [
                { icon: Shield },
                { icon: Monitor },
                { icon: Zap },
                { icon: TrendingUp },
              ],
            },
            {
              title: "Büyüme Trendleri",              description: "Arama motoru varlığınızı optimize etmek ve trafik çekmek için veri odaklı içgörüler.",              bentoComponent: "line-chart"},
          ]}
        />
        <MetricCardOne
          title="Neden Megafon Dijital?"
          description="Gerçek sonuçlar veren dijital ürünler geliştirme konusundaki deneyimimiz."
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            { id: "projects", value: "100+", title: "Başarılı Proje", description: "Tüm sektörlerde başarıyla teslim edildi.", icon: Award },
            { id: "satisfaction", value: "99%", title: "Müşteri Memnuniyeti", description: "Müşteri memnuniyet oranı ve artmaya devam ediyor.", icon: Users },
            { id: "delivery", value: "Ortalama 5 İş Günü", title: "Teslimat Süresi", description: "Web sitenizi ortalama 5 iş günü içinde yayına alıyoruz.", icon: TrendingUp },
          ]}
        />
        <FeatureCardSixteen
          title="Neden Megafon Dijital'i Seçmelisiniz?"
          description="Profesyonel bir dijital ajansın farkını deneyimleyin."
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          negativeCard={{
            items: [
              "Kişiliksiz genel şablonlar",              "Yavaş yükleme süreleri ve kötü performans",              "SEO stratejisi veya arama görünürlüğü eksikliği",              "İtibar zedeleyen eski tasarım",              "Lansman sonrası sürekli destek yok"],
          }}
          positiveCard={{
            items: [
              "Markanıza özel, kişiselleştirilmiş tasarımlar",              "Tüm cihazlarda yıldırım hızında performans",              "Organik trafik sağlayan yerleşik SEO",              "Güven oluşturan modern tasarım",              "Özel destek ve bakım"],
          }}
        />
        <FaqBase
          title="Sıkça Sorulan Sorular"
          description="Bizimle çalışmak hakkında bilmeniz gereken her şey."
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          faqs={[
            { id: "1", title: "Tipik bir proje ne kadar sürer?", content: "Projelerin çoğu kapsam ve karmaşıklığa bağlı olarak ortalama 5 iş günü içinde tamamlanır. İlk görüşmemizde size detaylı bir zaman çizelgesi sunacağız." },
            { id: "2", title: "Fiyatlandırma yapınız nasıl?", content: "İhtiyaçlarınıza özel proje bazlı fiyatlandırma sunuyoruz. Her proje tasarım, geliştirme, SEO optimizasyonu ve lansman sonrası desteği içerir." },
            { id: "3", title: "Sürekli bakım hizmeti sunuyor musunuz?", content: "Evet! Web sitenizin güncel, güvenli ve en iyi performansta kalması için sürekli destek ve bakım paketleri sunuyoruz." },
            { id: "4", title: "Mevcut web sitemi yeniden tasarlayabilir misiniz?", content: "Kesinlikle. Mevcut içeriğinizi ve SEO sıralamalarınızı koruyarak markanızı modernleştiren web sitesi yeniden tasarımlarında uzmanız." },
            { id: "5", title: "Hangi teknolojileri kullanıyorsunuz?", content: "Hızlı, ölçeklenebilir ve sürdürülebilir web siteleri sağlamak için Next.js, React ve Tailwind CSS gibi modern teknolojilerle inşa ediyoruz." },
          ]}
        />
        <ContactCTA
          tag="İletişime Geçin"
          title="Dijital Varlığınızı Dönüştürmeye Hazır mısınız?"
          description="Birlikte olağanüstü bir şeyler inşa edelim. Bizimle iletişime geçin ve bir sonraki projenizi konuşalım."
          background={{ variant: "rotated-rays-animated" }}
          buttons={[
            { text: "Projenizi Başlatın", href: "#contact" },
            { text: "Çalışmalarımızı Görün", href: "#work" },
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
        <FooterBase
          logoText="Megafon Dijital"
          copyrightText="© 2024 | Megafon Dijital"
          columns={[
            {
              title: "Şirket",              items: [
                { label: "Hakkımızda", href: "#about" },
                { label: "Hizmetler", href: "#services" },
                { label: "Referanslar", href: "#work" },
                { label: "İletişim", href: "#contact" },
              ],
            },
            {
              title: "Hizmetler",              items: [
                { label: "Web Geliştirme", href: "#" },
                { label: "SEO Optimizasyonu", href: "#" },
                { label: "Marka Kimliği", href: "#" },
                { label: "Sosyal Medya Yönetimi", href: "#" },
              ],
            },
            {
              title: "Bağlanın",              items: [
                { label: "Twitter", href: "#" },                { label: "LinkedIn", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "Dribbble", href: "#" },
              ],
            },
          ]}
        />
      </ReactLenis>
    </ThemeProvider>
  );
}
