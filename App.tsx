import React, { useState, useEffect } from 'react';
import { SectionCard } from './components/SectionCard';
import { IntelligenceBadge } from './components/IntelligenceBadge';
import { Icons, transportData, weatherInfo, gearList } from './constants';
import { InfoGrade } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'beijing' | 'shenzhen'>('beijing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      // Logic to highlight menu items could go here
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50">
      
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b p-4 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-lg font-bold text-indigo-900">华山情报简报</h1>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
          {isMenuOpen ? '关闭' : '菜单'}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-slate-900 text-slate-300 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out z-40 md:sticky md:top-0 md:h-screen overflow-y-auto`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-white mb-1">华山 Huashan</h1>
          <p className="text-xs text-indigo-400 font-mono mb-8">INTELLIGENCE REPORT</p>
          
          <nav className="space-y-1">
            {['行动总览', '交通部署', '黄金路线', '惊险项目', '住宿策略', '天气装备', '避坑指南'].map((item, idx) => (
              <a 
                key={idx}
                href={`#section-${idx}`}
                className="block px-4 py-2 rounded-lg hover:bg-slate-800 hover:text-white transition-colors text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-10 p-4 bg-slate-800 rounded-lg border border-slate-700">
            <p className="text-xs text-slate-400 uppercase mb-2">数据来源</p>
            <p className="text-xs">已分析 200+ 条 2025年11月的真实游客笔记与评价。</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-10 pt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded">周末计划</span>
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded">更新于 11月21日</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">华山周末极限体验情报指南</h1>
          <p className="text-lg text-slate-600">
            为北京与深圳出发的两人小组量身定制的战术指南。
            <br/>重点目标：体验【长空栈道】与【鹞子翻身】，基于最新真实情报优化，拒绝特种兵式无效打卡。
          </p>
        </div>

        {/* 1. Overview */}
        <SectionCard id="section-0" title="行动总览 (Overview)" icon={Icons.Mountain}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <h3 className="font-bold text-indigo-900 mb-2">核心任务目标</h3>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1">{Icons.Check}</span>
                  <span>执行“西上北下”黄金路线：风景最大化，膝盖损伤最小化。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">{Icons.Check}</span>
                  <span>拿下“长空栈道” (南峰)：华山第一险。</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">{Icons.Check}</span>
                  <span>拿下“鹞子翻身” (东峰)：体验垂直升降快感。</span>
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
              <h3 className="font-bold text-orange-900 mb-2">情报摘要</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span>拥挤程度</span>
                  <span className="font-medium text-orange-700">中等 (周末错峰是关键)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>天气风险</span>
                  <span className="font-medium text-red-600">高 (大风可能停运索道)</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>预估预算 (人均)</span>
                  <span className="font-medium text-orange-700">¥1500+ (不含大交通)</span>
                </div>
              </div>
            </div>
          </div>
        </SectionCard>

        {/* 2. Traffic */}
        <SectionCard id="section-1" title="交通部署 (Logistics)" icon={Icons.Train}>
          <div className="mb-6">
            <div className="flex space-x-4 border-b border-slate-200">
              <button 
                className={`pb-2 px-4 font-medium text-sm transition-colors ${activeTab === 'beijing' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveTab('beijing')}
              >
                北京出发方案
              </button>
              <button 
                className={`pb-2 px-4 font-medium text-sm transition-colors ${activeTab === 'shenzhen' ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
                onClick={() => setActiveTab('shenzhen')}
              >
                深圳出发方案
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {transportData.filter(t => t.origin.toLowerCase() === activeTab).map((option, idx) => (
              <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-slate-800">{option.mode}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded ${option.recommendationLevel === 'High' ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-600'}`}>
                    {option.recommendationLevel === 'High' ? '强力推荐' : '备选方案'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-3">
                  <div>⏱ {option.duration}</div>
                  <div>💰 {option.costEstimate}</div>
                </div>
                <ul className="text-sm space-y-1 text-slate-500 list-disc pl-4">
                  {option.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <IntelligenceBadge grade={InfoGrade.B} text="当地接驳情报" />
            <p className="text-sm text-yellow-800 mt-1">
              <strong>防骗警告：</strong> 到达 <strong>华山北站</strong> 后，出租车司机可能会骗你说免费公交车“没了”或者“要等很久”。
              <br/>
              <strong>事实是：</strong> 免费公交（1路/2路）班次很正常，直达游客中心。如果打车，正常价格约 15-20元/车（不是每人！），不要接受按人头收费的黑车。
            </p>
          </div>
        </SectionCard>

        {/* 3. Golden Route */}
        <SectionCard id="section-2" title="黄金路线：西上北下" icon={Icons.Map}>
          <IntelligenceBadge grade={InfoGrade.A} text="效率最高方案" />
          <p className="text-slate-600 mb-6">
            此路线在确保打卡所有主峰和惊险项目的同时，将爬升降至最低。相比“北上”，这条路线极大地节省了体力和膝盖。
          </p>

          <div className="relative border-l-4 border-indigo-200 ml-3 space-y-8">
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-800">08:00 - 游客中心 & 进山</h4>
              <p className="text-sm text-slate-600">乘坐西峰进山巴士 (40分钟) + 西峰索道 (20分钟)。 <br/><span className="text-xs text-slate-400">情报：周末索道排队可能超1小时，务必赶早。</span></p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-400 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-800">10:00 - 西峰 (莲花峰)</h4>
              <p className="text-sm text-slate-600">简单游览，拍照，不要逗留太久，直奔南峰。</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-red-500 border-4 border-white shadow-sm animate-pulse"></div>
              <h4 className="font-bold text-red-700">11:00 - 南峰 (长空栈道)</h4>
              <p className="text-sm text-slate-600"><strong>全山最高点 + 核心任务。</strong> 立即去长空栈道排队，这是全天最大的时间瓶颈。</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-orange-500 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-800">13:30 - 东峰 (鹞子翻身)</h4>
              <p className="text-sm text-slate-600">第二个惊险项目。需要穿戴安全绳。通常排队比长空栈道快。</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-indigo-400 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-800">15:30 - 中峰 & 北峰 (下撤)</h4>
              <p className="text-sm text-slate-600">下山阶段。途经金锁关、苍龙岭（下坡很陡，注意膝盖）。</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-green-600 border-4 border-white shadow-sm"></div>
              <h4 className="font-bold text-slate-800">17:00 - 北峰索道 下山</h4>
              <p className="text-sm text-slate-600">乘坐索道下行 (10分钟)，转乘出山巴士回到游客中心。</p>
            </div>
          </div>
        </SectionCard>

        {/* 4. Thrill Projects */}
        <SectionCard id="section-3" title="惊险项目作战协议" icon={Icons.Alert}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800 text-slate-50 rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 3.5L18.5 19H5.5L12 5.5z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-yellow-400">长空栈道 (Plank Walk)</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>位置</span>
                  <span className="font-mono text-slate-300">南峰 (南天门外)</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>费用</span>
                  <span className="font-mono text-slate-300">¥30 (建议备现金)</span>
                </li>
                <li className="flex justify-between border-b border-slate-700 pb-2">
                  <span>硬性要求</span>
                  <span className="font-mono text-slate-300">必须 2人及以上 结伴</span>
                </li>
              </ul>
              <div className="mt-4 bg-slate-700 p-3 rounded text-xs text-yellow-200">
                <strong>关键情报 (CRITICAL INTEL):</strong> 
                一定要关注“华山旅游服务平台”公众号。票务可能需要当天早上 <strong>6:30</strong> 准时抢预约（淡旺季政策有变动）。
                <br/>如果线上没号，立即去现场排队（有线下名额），但可能要排2-3小时。
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-slate-800">鹞子翻身 (Sparrow Flip)</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>位置</span>
                  <span className="font-mono text-slate-800">东峰 (下棋亭)</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>费用</span>
                  <span className="font-mono text-slate-800">¥30</span>
                </li>
                <li className="flex justify-between border-b border-slate-200 pb-2">
                  <span>体验特点</span>
                  <span className="font-mono text-slate-800">垂直悬崖速降</span>
                </li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                相比长空栈道，这里排队稍微快一点，但技术难度更高（需要面壁垂直向下攀爬）。下到最底部的下棋亭拍照非常出片，有一种孤寂的武侠感。
              </p>
            </div>
          </div>
        </SectionCard>

        {/* 5. Weather & Gear */}
        <SectionCard id="section-4" title="天气与装备 (11-12月)" icon={Icons.CloudRain}>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <IntelligenceBadge grade={InfoGrade.A} text="气象预警" />
              <div className="mt-2 bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="text-3xl font-bold text-blue-900 mb-1">{weatherInfo.tempRange}</div>
                <div className="text-sm text-blue-700 font-medium">{weatherInfo.conditions}</div>
                <div className="mt-4 space-y-2">
                  {weatherInfo.warnings.map((w, i) => (
                    <div key={i} className="flex gap-2 text-xs text-blue-800">
                      <span>⚠️</span>
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="font-bold text-slate-800 mb-3">必备装备清单</h4>
              <ul className="space-y-2">
                {gearList.map((item, i) => (
                  <li key={i} className="flex items-center justify-between bg-white p-2 rounded border border-slate-100">
                    <span className="text-sm font-medium text-slate-700">{item.item}</span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.importance === 'Critical' ? 'bg-red-100 text-red-700' : 
                      item.importance === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {item.importance === 'Critical' ? '保命必备' : item.importance === 'High' ? '强烈推荐' : '建议携带'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>

        {/* 6. Accommodation */}
        <SectionCard id="section-5" title="住宿策略分析" icon={Icons.Bed}>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold">
                <tr>
                  <th className="px-4 py-3">区域</th>
                  <th className="px-4 py-3">优势 (Pros)</th>
                  <th className="px-4 py-3">劣势 (Cons)</th>
                  <th className="px-4 py-3">评级</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-4 py-3 font-medium">华阴市区 (推荐)</td>
                  <td className="px-4 py-3 text-slate-600">美食多(肉夹馍/大刀面)，酒店便宜条件好，打车去景区仅10分钟。</td>
                  <td className="px-4 py-3 text-slate-600">早上需要稍微早起一点打车。</td>
                  <td className="px-4 py-3"><span className="text-green-600 font-bold">最佳性价比</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">游客中心周边</td>
                  <td className="px-4 py-3 text-slate-600">步行即到进山口，适合想抢最早一班索道的人。</td>
                  <td className="px-4 py-3 text-slate-600">吃饭极贵且难吃（被称为“美食荒漠”），酒店溢价高。</td>
                  <td className="px-4 py-3"><span className="text-slate-500">一般</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">山顶东峰 (夜爬党)</td>
                  <td className="px-4 py-3 text-slate-600">不用赶路，出门就是日出。</td>
                  <td className="px-4 py-3 text-slate-600">极贵，条件艰苦（多人通铺），冬天没水洗澡，厕所环境差。</td>
                  <td className="px-4 py-3"><span className="text-red-500">仅限硬核玩家</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionCard>

        {/* 7. Pitfalls */}
        <SectionCard id="section-6" title="避坑指南 (基于200+条笔记)" icon={Icons.Alert}>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="bg-red-50 p-4 rounded border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">❌ “滑道”刺客 (Huadao)</h4>
              <p className="text-xs text-red-700">
                西峰索道下站后，会有工作人员推销“滑道”代步。
                <strong>真相：</strong> 收费30元，只能省几分钟路程，下了滑道还要走很长台阶。排队时间往往比走路还长，不值。
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">❌ “免费拍照”陷阱</h4>
              <p className="text-xs text-red-700">
                景区内送的“免费钥匙扣/照片”通常非常小且模糊，目的是让你花30-60元买大照片。不要浪费时间排队领这个。
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded border border-red-100">
              <h4 className="font-bold text-red-800 mb-2">❌ 出租车不打表</h4>
              <p className="text-xs text-red-700">
                华阴出租车针对外地游客经常不打表。坚持要求打表，或者直接一口价（比如华山北到游客中心，整车20元左右是合理的，不要按人头付）。
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded border border-green-100">
              <h4 className="font-bold text-green-800 mb-2">✅ 美食情报</h4>
              <p className="text-xs text-green-700">
                千万不要在游客中心附近吃饭！去华阴市区吃。
                <br/>高分推荐：“胖女人肉夹馍”、“孟记大刀面”、“咱家院子”。
              </p>
            </div>
          </div>
        </SectionCard>

      </main>
    </div>
  );
}

export default App;