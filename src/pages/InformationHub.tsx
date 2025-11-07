import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Link, useNavigate } from 'react-router-dom';
import RibbonTrail from '../components/RibbonTrail';
import Header from "../components/Header";
import Footer from "../components/Footer";

const InformationHub = () => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);
  
  const categories = [
    {
      title: "重要文件(随身携带，勿托运)",
      color: "rgba(255, 201, 202, 0.12)",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>护照(有效签证页)</li>
            <li>I-20 原件(或 DS-2019)</li>
            <li>SEVIS 付款确认页</li>
            <li>BROWN 录取通知 / OFFER 信</li>
            <li>疫苗接种记录(如已上传可不带)/旅行 健康证明检查证书/疫苗接种或预防措施 国际证书</li>
            <li>护照照片若干/证件照若干</li>
          </ul>
          <p className="mt-4">建议扫描所有文件并备份到云端/本地设备， 以供随时下载使用</p>
        </div>
      ),
      onClick: () => navigate('/information-hub/new-students')
    },
    {
      title: "衣物类",
      color: "rgba(255, 201, 202, 0.12)",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>日常衣物(T恤、卫衣、牛仔裤等)</li>
            <li>外套/羽绒服(新英格兰冬天寒冷)</li>
            <li>秋冬围巾、手套、毛帽</li>
            <li>内衣、袜子、拖鞋</li>
            <li>正装一套(演讲、CAREER FAIR可用)</li>
            <li>室内服、睡衣</li>
            <li>泳衣(BROWN有泳池)</li>
          </ul>
          <p className="mt-4">建议衣物以基础款为主，美国买衣服也很方便， 部分品牌较国内便宜</p>
        </div>
      ),
      onClick: () => navigate('/information-hub/career')
    },
    {
      title: "生活用品类",
      color: "rgba(255, 201, 202, 0.12)",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>转换插头(中美插头不同)</li>
            <li>便携插线板(美标)</li>
            <li>常用药品(感冒药、肠胃药、创口贴)</li>
            <li>护肤品、洗护用品(过渡期使用)</li>
            <li>洗衣袋/洗衣液(校内有洗衣房)</li>
            <li>雨伞、保温杯、水瓶</li>
            <li>被套(有需要建议带，大多美国卖的被套是垫在被子下面的)</li>
            <li>枕头、床垫、床单(建议落地后购买)</li>
            <li>眼镜/隐形眼镜(美国验配较贵)</li>
            <li>其他个人用品</li>
          </ul>
        </div>
      ),
      onClick: () => navigate('/information-hub/campus-life')
    },
    {
      title: "电子产品类",
      color: "rgba(255, 201, 202, 0.12)",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>笔记本电脑 & 充电器(必备)</li>
            <li>手机 & 美版SIM卡(落地后购买也可以， 一定要走之前开启国际漫游)</li>
            <li>移动电源(随身携带，不能托运)</li>
            <li>耳机/蓝牙耳机</li>
            <li>U盘、移动硬盘(备份资料)</li>
          </ul>
        </div>
      ),
      onClick: () => navigate('/information-hub/alumni')
    },
    {
      title: "学习用品(建议)",
      color: "rgba(255, 201, 202, 0.12)",
      description: (
        <div>
          <ul className="list-disc list-inside space-y-1">
            <li>文具若干(笔记本、笔等)</li>
            <li>多功能文具袋/收纳袋</li>
            <li>书包/电脑包</li>
            <li>考试用计算器</li>
            <li>课本不用提前准备，开学后再定</li>
          </ul>
        </div>
      ),
      onClick: () => navigate('/information-hub/academic')
    },
    {
      title: ["中国特色小物(选带)", "不要带的/无需带的"],
      color: "rgba(255, 201, 202, 0.12)",
      description: [
        (
          <div>
            <ul className="list-disc list-inside space-y-1">
              <li>小礼物(可送室友、教授)</li>
              <li>中国调料包(如火锅底料、老干妈)</li>
              <li>家乡特产(少量)</li>
              <li>喜欢的零食(前几周解馋用)</li>
            </ul>
          </div>
        ),
        (
          <div>
            <ul className="list-disc list-inside space-y-1">
              <li>锅碗瓢盆(带不方便，美国也不贵)</li>
              <li>大量衣物(带适量基础款，到地再买)</li>
            </ul>
          </div>
        )
      ],
      onClick: () => navigate('/information-hub/others')
    }
  ];

  const totalPages = 4; // 4 dots for 6 cards, scrolling one card at a time

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    const scrollCenter = scrollLeft + containerWidth / 2;
    
    // Find which card is closest to the center
    const cards = container.querySelectorAll('[data-card-index]');
    let closestIndex = 0;
    let closestDistance = Infinity;
    
    cards.forEach((card) => {
      const cardElement = card as HTMLElement;
      const cardIndex = parseInt(cardElement.getAttribute('data-card-index') || '0');
      const cardLeft = cardElement.offsetLeft;
      const cardWidth = cardElement.offsetWidth;
      const cardCenter = cardLeft + cardWidth / 2;
      const distance = Math.abs(scrollCenter - cardCenter);
      
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = cardIndex;
      }
    });
    
    // Map card positions to 4 dots based on which card is centered:
    // Dot 0: Card 1 centered (cards 0, 1, 2 visible)
    // Dot 1: Card 2 centered (cards 1, 2, 3 visible)
    // Dot 2: Card 3 centered (cards 2, 3, 4 visible)
    // Dot 3: Card 4 centered (cards 3, 4, 5 visible)
    let currentPage = 0;
    if (closestIndex === 0 || closestIndex === 1) {
      currentPage = 0; // Dot 0: Card 1 centered
    } else if (closestIndex === 2) {
      currentPage = 1; // Dot 1: Card 2 centered
    } else if (closestIndex === 3) {
      currentPage = 2; // Dot 2: Card 3 centered
    } else {
      currentPage = 3; // Dot 3: Card 4 centered
    }
    
    setActivePage(currentPage);
  };

  const scrollToPage = (pageIndex: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cards = container.querySelectorAll('[data-card-index]');
    
    // Map page index to target card (the card to center):
    // Page 0: Center on card 1 (show cards 0, 1, 2)
    // Page 1: Center on card 2 (show cards 1, 2, 3)
    // Page 2: Center on card 3 (show cards 2, 3, 4)
    // Page 3: Center on card 4 (show cards 3, 4, 5)
    const targetCardIndex = pageIndex + 1;
    const targetCard = cards[targetCardIndex] as HTMLElement;
    
    if (targetCard) {
      const containerWidth = container.offsetWidth;
      const cardLeft = targetCard.offsetLeft;
      const cardWidth = targetCard.offsetWidth;
      const scrollPosition = cardLeft - (containerWidth / 2 - cardWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen font-['Georgia'] relative bg-white">
      <RibbonTrail />
      <Header />

      {/* Background corners */}
      <img src={import.meta.env.BASE_URL + "uploads/bottom-left.png"} alt="Top Left" className="absolute top-24 left-0 w-[20rem] h-auto object-contain opacity-90 z-0" />
      <img src={import.meta.env.BASE_URL + "uploads/bottom-right.png"} alt="Bottom Right" className="absolute bottom-56 right-0 w-[24rem] h-auto object-contain opacity-90 z-0" />

      <div className="container mx-auto pt-44 pb-16 px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="overflow-x-auto pb-4 scroll-container" 
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <style>{`
              .scroll-container::-webkit-scrollbar {
                display: none;
                width: 0;
                height: 0;
              }
              .scroll-container {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
            <div className="flex gap-8" style={{ width: 'fit-content' }}>
              {categories.map((category, index) => (
                <motion.div
                  key={Array.isArray(category.title) ? category.title.join('-') : category.title}
                  data-card-index={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer flex-shrink-0"
                  style={{ 
                    width: 'clamp(320px, calc((min(100vw - 2rem, 72rem - 4rem) - 4rem) / 3), 450px)',
                    minWidth: '320px'
                  }}
                  onClick={category.onClick}
                >
                  <div
                    className="h-[26rem] rounded-xl p-8 flex flex-col justify-start text-left transition-all duration-300 shadow-lg hover:shadow-xl w-full"
                    style={{ backgroundColor: category.color }}
                  >
                    {Array.isArray(category.title) ? (
                      category.title.map((t, i) => (
                        <div key={i} className="mb-6">
                          <h3 className="text-2xl font-bold text-[#AB1F24] mb-2">{t}</h3>
                          <div className="text-[#4E3629]/80">
                            {typeof category.description[i] === 'string' ? (
                              <p>{category.description[i]}</p>
                            ) : (
                              category.description[i]
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-[#AB1F24] mb-2">{category.title}</h3>
                        <div className="text-[#4E3629]/80">
                          {typeof category.description === 'string' ? (
                            <p>{category.description}</p>
                          ) : (
                            category.description
                          )}
                        </div>
                      </>
                    )}

                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Page Indicator */}
          <div 
            className="flex justify-center items-center gap-3 mt-8 px-4 py-2 rounded-full mx-auto"
            style={{ 
              backgroundColor: 'rgba(255, 201, 202, 0.12)',
              width: 'clamp(160px, calc((min(100vw - 2rem, 72rem - 4rem) - 4rem) / 6), 225px)',
              maxWidth: '225px'
            }}
          >
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToPage(index)}
                className="w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: index === activePage 
                    ? 'rgba(171, 31, 36, 0.75)' 
                    : 'rgba(171, 31, 36, 0.3)',
                  transform: index === activePage ? 'scale(1.2)' : 'scale(1)'
                }}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default InformationHub;
