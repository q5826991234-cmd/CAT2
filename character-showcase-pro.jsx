import React, { useState } from 'react';
import { X, Youtube, Instagram, Twitter, Settings, Edit2 } from 'lucide-react';

const CharacterShowcasePro = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showBannerSettings, setShowBannerSettings] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordAction, setPasswordAction] = useState(''); // 'settings' or 'banner'
  
  const [bannerSettings, setBannerSettings] = useState({
    title: '頻道角色介紹',
    subtitle: '點擊角色了解更多資訊',
    bgColor: '#FF6B9D',
    bgGradient: '#C77DFF',
    titleColor: '#FFFFFF',
    subtitleColor: 'rgba(255,255,255,0.9)',
    bannerImage: '',
    showImage: false,
    overlay: true
  });

  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: '爆肝工程獅',
      title: '貓國守護者',
      avatar: '🦁',
      bgColor: '#FFB347',
      merchandiseBgColor: '#FFF3E0',
      imageUrl: '',
      tagText: '貓國守護者',
      nickname: '獅子、老獅、蘇子',
      level: '125',
      features: [
        '稱呼：獅子、老獅、蘇子',
        '等級：125',
        '擁有過的稱號：貓國金庫、孔雀吉祥物',
        '擅長的事：解謎、分析、推理、導航'
      ],
      skills: [
        '洞察：★★★★★',
        '攻擊：★★★★☆',
        '防禦：★★★★☆',
        '特殊技能：獅吼功、獅之掌',
        '被動：恐怖遊戲免疫'
      ],
      students: '銀河系學生：日系、白狐、海豹',
      story: '貓國王在拯救銀河系的過程中遇見了超猛獅子，於是拜了獅子為師，邀請老獅加入貓國，並請他擔任貓國守護者的職位，經典名言：「我不是渣，我只是想給天下的母獅子一個家」。',
      merchandiseImages: [],
      videos: [],
      social: {
        youtube: 'https://youtube.com',
        twitter: 'https://twitch.tv'
      }
    },
    {
      id: 2,
      name: '賣寶路的貓頭鷹商人',
      title: '貓國守護者',
      avatar: '🦉',
      bgColor: '#A0826D',
      merchandiseBgColor: '#FFF5E6',
      imageUrl: '',
      tagText: '貓國守護者',
      nickname: '寶路、貓頭鷹',
      level: '125',
      features: [
        '稱呼：寶路、貓頭鷹',
        '等級：125',
        '擅長的事：維修電腦、電腦健檢'
      ],
      skills: [
        '洞察：★★☆☆☆',
        '攻擊：★★★☆☆',
        '防禦：★★☆☆☆',
        '特殊技能：丟狗罐頭',
        '被動：夜視'
      ],
      story: '貓國王在異世界教訓殭屍的旅途中，從天而降了一隻貓頭鷹，貓頭鷹一開始全身著斗篷，看不出是貓頭鷹，他說他是個商人，但只有賣狗罐頭，雖然不明所以，但貓國王還是將他收入貓國，在守護者考試中，貓頭鷹考過，於是擔任了貓國的守護者。',
      merchandiseImages: [],
      videos: [],
      social: {}
    },
    {
      id: 3,
      name: '即刻救援大叔',
      title: '不睡覺大魔王',
      avatar: '🎯',
      bgColor: '#E57373',
      merchandiseBgColor: '#FFE6E6',
      imageUrl: '',
      tagText: '不睡覺大魔王',
      nickname: '大叔',
      level: '--',
      features: [
        '稱呼：大叔',
        '等級：--'
      ],
      skills: [
        '洞察：★★★☆☆',
        '攻擊：★★★★☆',
        '防禦：★★★☆☆'
      ],
      story: '貓國王還未建國時，在魔物世界與麒麟搏鬥的過程中，經歷了無數次的失敗，被電的咪咪冒冒，剩餘一次死亡次數時，即刻救援的獵人趕到，並且消滅了麒麟，那位獵人就是大叔，於是被貓國王邀請進入了貓國預蓋地，後來他們經歷過了無數次的狩獵，成為了狩獵好夥伴，在隨後貓國王前往拯救銀河系的旅程中，也有大叔的身影。',
      merchandiseImages: [],
      videos: [],
      social: {}
    },
    {
      id: 4,
      name: '傑哥',
      title: '護國神獸',
      avatar: '🐕',
      bgColor: '#FFB74D',
      merchandiseBgColor: '#FFF3E6',
      imageUrl: '',
      tagText: '護國神獸',
      nickname: '傑哥',
      level: '--',
      features: [
        '等級：--'
      ],
      skills: [
        '洞察：★★★☆☆',
        '攻擊：★★★☆☆',
        '防禦：★★★★★'
      ],
      story: '傑哥的形象來源於他家的狗，是貓國的特別神獸，只要拉腿就會發出凶狠的叫聲，傑哥與貓國王也是在魔物世界中相遇的，一起並肩作戰打敗了許多魔物，隨後也一起征服了各種異世界。',
      merchandiseImages: [],
      videos: [],
      social: {}
    },
    {
      id: 5,
      name: '紫玥暝',
      title: '海豹料理專家',
      avatar: '🦭',
      bgColor: '#64B5F6',
      merchandiseBgColor: '#E3F2FD',
      imageUrl: '',
      tagText: '海豹料理專家',
      nickname: '海豹',
      level: '--',
      features: [
        '稱呼：海豹',
        '等級：--',
        '在貓國已經被烤了263次！'
      ],
      skills: [
        '洞察：★★★☆☆',
        '攻擊：★★★★☆',
        '防禦：★★★☆☆'
      ],
      story: '貓國王出外尋找邦交國時，走到了一個特殊的村子，裡面的人在討論各種海豹料理，那時貓國王心想：「蛤~好油喔！」，嘗過一次後便愛上了海豹料理，並且引進了這項料理到貓國，在貓國海豹已經被烤了263次了！這個村子就是海豹村，貓國王也在此遇見了海豹！與他成為了好朋友。',
      merchandiseImages: [],
      videos: [],
      social: {}
    },
    {
      id: 6,
      name: '魅白狐',
      title: '九尾狐徒弟',
      avatar: '🦊',
      bgColor: '#E0E0E0',
      merchandiseBgColor: '#F5F5F5',
      imageUrl: '',
      tagText: '九尾狐徒弟',
      nickname: '白狐、花心狐',
      level: '--',
      features: [
        '稱呼：白狐、花心狐',
        '等級：--',
        '白狐之歌：「白狐R白狐~ 你沒有尾巴」'
      ],
      skills: [
        '洞察：★★☆☆☆',
        '攻擊：★☆☆☆☆',
        '防禦：★★☆☆☆'
      ],
      story: '貓國王透過海豹好朋友認識的一隻九尾狐，但這隻狐的尾巴常常被國王拔掉，所以常變成沒尾巴的白狐，貓國王還創了一首白狐沒尾巴之歌：「白狐R白狐~ 你沒有尾巴」；在江湖世界裡收了白狐當徒弟，目前正在耐心教導中。',
      merchandiseImages: [],
      videos: [],
      social: {}
    }
  ]);

  const [editingCharacter, setEditingCharacter] = useState(null);

  // 管理員密碼保護
  const ADMIN_PASSWORD = "582699";
  
  const handlePasswordSubmit = () => {
    if (passwordInput === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordModal(false);
      setPasswordInput('');
      
      // 執行對應動作
      if (passwordAction === 'settings') {
        setShowSettings(true);
      } else if (passwordAction === 'banner') {
        setShowBannerSettings(true);
      } else if (passwordAction === 'login') {
        // 只登入，不開啟任何面板
        alert("✅ 登入成功!現在可以編輯內容了。");
      }
    } else {
      alert("❌ 密碼錯誤!");
      setPasswordInput('');
    }
  };

  const handleSettingsClick = () => {
    if (!isAdmin) {
      setPasswordAction('settings');
      setShowPasswordModal(true);
    } else {
      setShowSettings(!showSettings);
    }
  };

  const handleBannerEditClick = () => {
    if (!isAdmin) {
      setPasswordAction('banner');
      setShowPasswordModal(true);
    } else {
      setShowBannerSettings(true);
    }
  };

  const handleSaveCharacter = (character) => {
    if (character.id) {
      setCharacters(characters.map(c => c.id === character.id ? character : c));
    } else {
      const newCharacter = {
        ...character,
        id: Math.max(...characters.map(c => c.id), 0) + 1
      };
      setCharacters([...characters, newCharacter]);
    }
    setEditingCharacter(null);
  };

  const handleDeleteCharacter = (id) => {
    if (confirm('確定要刪除這個角色嗎?')) {
      setCharacters(characters.filter(c => c.id !== id));
    }
  };

  // 橫幅編輯器組件
  const BannerEditor = ({ settings, onSave, onCancel }) => {
    const [formData, setFormData] = useState(settings);
    const [imagePreview, setImagePreview] = useState(settings.bannerImage || '');

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setFormData({...formData, bannerImage: reader.result, showImage: true});
        };
        reader.readAsDataURL(file);
      }
    };

    return (
      <div className="modal-overlay" onClick={onCancel}>
        <div className="editor-box" onClick={(e) => e.stopPropagation()}>
          <h2 className="editor-title">編輯橫幅設定</h2>
          
          <div className="form-group full-width">
            <label>主標題</label>
            <input 
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="form-group full-width">
            <label>副標題</label>
            <input 
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label>漸層起始色</label>
              <input 
                type="color"
                value={formData.bgColor}
                onChange={(e) => setFormData({...formData, bgColor: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>漸層結束色</label>
              <input 
                type="color"
                value={formData.bgGradient}
                onChange={(e) => setFormData({...formData, bgGradient: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>標題顏色</label>
              <input 
                type="color"
                value={formData.titleColor}
                onChange={(e) => setFormData({...formData, titleColor: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>副標題顏色</label>
              <input 
                type="color"
                value={formData.subtitleColor}
                onChange={(e) => setFormData({...formData, subtitleColor: e.target.value})}
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label>
              <input 
                type="checkbox"
                checked={formData.overlay}
                onChange={(e) => setFormData({...formData, overlay: e.target.checked})}
              />
              {' '}使用深色遮罩 (當有背景圖時)
            </label>
          </div>

          <div className="form-group full-width">
            <label>橫幅背景圖片 (選填)</label>
            <div className="image-upload-area">
              <input 
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="banner-upload"
                style={{ display: 'none' }}
              />
              <label htmlFor="banner-upload" className="upload-btn">
                📁 選擇背景圖片
              </label>
              
              {imagePreview && (
                <div className="banner-preview">
                  <img src={imagePreview} alt="橫幅預覽" />
                  <button 
                    className="remove-image"
                    onClick={() => {
                      setImagePreview('');
                      setFormData({...formData, bannerImage: '', showImage: false});
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="editor-actions">
            <button className="btn-cancel" onClick={onCancel}>取消</button>
            <button className="btn-save" onClick={() => onSave(formData)}>儲存</button>
          </div>
        </div>
      </div>
    );
  };

  // 角色編輯器組件 (簡化版,完整版太長)
  const CharacterEditor = ({ character, onSave, onCancel }) => {
    const [formData, setFormData] = useState(character);
    const [imagePreview, setImagePreview] = useState(character.imageUrl || '');
    const [merchandisePreviews, setMerchandisePreviews] = useState(character.merchandiseImages || []);

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
          setFormData({...formData, imageUrl: reader.result});
        };
        reader.readAsDataURL(file);
      }
    };

    const handleMerchandiseUpload = (e) => {
      const files = Array.from(e.target.files);
      files.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setMerchandisePreviews(prev => {
            const newPreviews = [...prev, reader.result];
            setFormData({...formData, merchandiseImages: newPreviews});
            return newPreviews;
          });
        };
        reader.readAsDataURL(file);
      });
    };

    const removeMerchandise = (index) => {
      const newPreviews = merchandisePreviews.filter((_, i) => i !== index);
      setMerchandisePreviews(newPreviews);
      setFormData({...formData, merchandiseImages: newPreviews});
    };

    return (
      <div className="modal-overlay" onClick={onCancel}>
        <div className="editor-box" onClick={(e) => e.stopPropagation()}>
          <h2 className="editor-title">{character.id ? '編輯角色' : '新增角色'}</h2>
          
          <div className="form-grid">
            <div className="form-group">
              <label>角色名稱 *</label>
              <input 
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>角色稱號 *</label>
              <input 
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>標籤文字</label>
              <input 
                type="text"
                value={formData.tagText || '明星介紹'}
                onChange={(e) => setFormData({...formData, tagText: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>背景顏色</label>
              <input 
                type="color"
                value={formData.bgColor}
                onChange={(e) => setFormData({...formData, bgColor: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>商品區背景顏色</label>
              <input 
                type="color"
                value={formData.merchandiseBgColor || '#FFFFFF'}
                onChange={(e) => setFormData({...formData, merchandiseBgColor: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>誕生年</label>
              <input 
                type="text"
                value={formData.birthYear || ''}
                onChange={(e) => setFormData({...formData, birthYear: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>生日</label>
              <input 
                type="text"
                value={formData.birthday || ''}
                onChange={(e) => setFormData({...formData, birthday: e.target.value})}
              />
            </div>
          </div>

          {/* 主要角色圖片 */}
          <div className="form-group full-width">
            <label>角色主圖</label>
            <div className="image-upload-area">
              <input 
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                id="image-upload"
                style={{ display: 'none' }}
              />
              <label htmlFor="image-upload" className="upload-btn">
                📁 選擇圖片
              </label>
              
              {imagePreview ? (
                <div className="image-preview">
                  <img src={imagePreview} alt="預覽" />
                  <button 
                    className="remove-image"
                    onClick={() => {
                      setImagePreview('');
                      setFormData({...formData, imageUrl: '', avatar: '😀'});
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="form-group" style={{ marginTop: '12px' }}>
                  <label>或使用 Emoji</label>
                  <input 
                    type="text"
                    value={formData.avatar}
                    onChange={(e) => setFormData({...formData, avatar: e.target.value})}
                    style={{ fontSize: '24px' }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* 周邊商品圖片 */}
          <div className="form-group full-width">
            <label>周邊商品圖片 (最多3張)</label>
            <div className="image-upload-area">
              <input 
                type="file"
                accept="image/*"
                multiple
                onChange={handleMerchandiseUpload}
                id="merchandise-upload"
                style={{ display: 'none' }}
                disabled={merchandisePreviews.length >= 3}
              />
              <label 
                htmlFor="merchandise-upload" 
                className={`upload-btn ${merchandisePreviews.length >= 3 ? 'disabled' : ''}`}
              >
                📁 選擇商品圖片 ({merchandisePreviews.length}/3)
              </label>
              
              {merchandisePreviews.length > 0 && (
                <div className="merchandise-previews">
                  {merchandisePreviews.map((img, index) => (
                    <div key={index} className="merchandise-preview">
                      <img src={img} alt={`商品${index + 1}`} />
                      <button 
                        className="remove-merchandise"
                        onClick={() => removeMerchandise(index)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="form-group full-width">
            <label>特徵 (每行一個)</label>
            <textarea 
              value={formData.features?.join('\n') || ''}
              onChange={(e) => setFormData({
                ...formData, 
                features: e.target.value.split('\n').filter(f => f.trim())
              })}
              rows="3"
            />
          </div>

          <div className="form-group full-width">
            <label>夢想</label>
            <input 
              type="text"
              value={formData.dream || ''}
              onChange={(e) => setFormData({...formData, dream: e.target.value})}
            />
          </div>

          <div className="form-group full-width">
            <label>個性</label>
            <input 
              type="text"
              value={formData.personality || ''}
              onChange={(e) => setFormData({...formData, personality: e.target.value})}
            />
          </div>

          <div className="form-group full-width">
            <label>故事介紹</label>
            <textarea 
              value={formData.story || ''}
              onChange={(e) => setFormData({...formData, story: e.target.value})}
              rows="3"
            />
          </div>

          <div className="form-group full-width">
            <label>YouTube 連結</label>
            <input 
              type="text"
              value={formData.social?.youtube || ''}
              onChange={(e) => setFormData({
                ...formData, 
                social: {...formData.social, youtube: e.target.value}
              })}
            />
          </div>

          <div className="form-group full-width">
            <label>Instagram 連結</label>
            <input 
              type="text"
              value={formData.social?.instagram || ''}
              onChange={(e) => setFormData({
                ...formData, 
                social: {...formData.social, instagram: e.target.value}
              })}
            />
          </div>

          <div className="form-group full-width">
            <label>Twitter 連結</label>
            <input 
              type="text"
              value={formData.social?.twitter || ''}
              onChange={(e) => setFormData({
                ...formData, 
                social: {...formData.social, twitter: e.target.value}
              })}
            />
          </div>

          <div className="editor-actions">
            <button className="btn-cancel" onClick={onCancel}>取消</button>
            <button className="btn-save" onClick={() => onSave(formData)}>儲存</button>
          </div>
        </div>
      </div>
    );
  };

  // 角色卡片組件
  const CharacterCard = ({ character }) => {
    return (
      <div 
        className="pro-character-card"
        onClick={() => setSelectedCharacter(character)}
      >
        <div className="pro-card-image" style={{ background: character.bgColor }}>
          <div className="pro-card-shine"></div>
          {character.imageUrl ? (
            <img src={character.imageUrl} alt={character.name} className="pro-card-img" />
          ) : (
            <div className="pro-card-avatar">{character.avatar}</div>
          )}
        </div>
        <div className="pro-card-info">
          <h3 className="pro-card-name">{character.name}</h3>
          <p className="pro-card-title">{character.title}</p>
        </div>
      </div>
    );
  };

  // Modal 組件
  const Modal = ({ character, onClose }) => {
    if (!character) return null;

    const getBorderColor = (bgColor) => {
      // 將淺色轉為深色,增加對比度
      return bgColor.replace(/[0-9A-F]{2}/gi, (match) => {
        const value = parseInt(match, 16);
        const darker = Math.max(0, Math.floor(value * 0.4)).toString(16).padStart(2, '0');
        return darker;
      });
    };

    const getTagColor = (bgColor) => {
      // 為標籤創建更深、更飽和的顏色
      return bgColor.replace(/[0-9A-F]{2}/gi, (match) => {
        const value = parseInt(match, 16);
        const darker = Math.max(0, Math.floor(value * 0.5)).toString(16).padStart(2, '0');
        return darker;
      });
    };

    const getLighterColor = (bgColor) => {
      // 創建更亮的顏色用於漸層
      return bgColor.replace(/[0-9A-F]{2}/gi, (match) => {
        const value = parseInt(match, 16);
        const lighter = Math.min(255, Math.floor(value + (255 - value) * 0.5)).toString(16).padStart(2, '0');
        return lighter;
      });
    };

    const borderColor = getBorderColor(character.bgColor);
    const tagColor = getTagColor(character.bgColor);
    const lighterColor = getLighterColor(character.bgColor);

    return (
      <div className="pro-modal-overlay" onClick={onClose}>
        <div className="pro-modal" onClick={(e) => e.stopPropagation()} style={{
          background: `
            radial-gradient(circle at 20% 20%, ${lighterColor}80, transparent 50%),
            radial-gradient(circle at 80% 80%, ${character.bgColor}60, transparent 50%),
            linear-gradient(135deg, ${character.bgColor} 0%, ${lighterColor} 50%, ${character.bgColor} 100%)
          `,
          borderColor: borderColor
        }}>
          {/* 裝飾性圖案 */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(255,255,255,0.03) 40px,
                rgba(255,255,255,0.03) 80px
              )
            `,
            pointerEvents: 'none',
            zIndex: 1
          }}></div>
          <button className="pro-modal-close" onClick={onClose} style={{ zIndex: 10 }}>
            <X size={26} />
          </button>

          <div className="pro-modal-tag" style={{ background: tagColor, zIndex: 10 }}>
            {character.tagText || '明星介紹'}
          </div>

          <div className="pro-modal-content" style={{ position: 'relative', zIndex: 2 }}>
            <div className="pro-modal-left">
              {character.imageUrl ? (
                <img src={character.imageUrl} alt={character.name} className="pro-modal-img" />
              ) : (
                <div className="pro-modal-emoji">{character.avatar}</div>
              )}
            </div>

            <div className="pro-modal-right">
              <h2 className="pro-modal-name">{character.name}</h2>
              
              {/* 基本資訊區塊 */}
              {(character.birthYear || character.birthday || character.level || 
                (character.features && character.features.length > 0)) && (
                <div className="pro-modal-section">
                  <div className="pro-modal-section-title">
                    <span>📋</span> 基本資訊
                  </div>
                  <div className="pro-modal-features">
                    {character.birthYear && (
                      <p className="pro-modal-detail">📅 誕生年：{character.birthYear}</p>
                    )}
                    {character.birthday && (
                      <p className="pro-modal-detail">🎂 生日：{character.birthday}</p>
                    )}
                    {character.features && character.features.map((feature, idx) => (
                      <p key={idx} className="pro-modal-detail">{feature}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {/* 學生資訊 */}
              {character.students && (
                <div className="pro-modal-section">
                  <p className="pro-modal-detail">{character.students}</p>
                </div>
              )}
              
              {/* 能力值區塊 */}
              {character.skills && character.skills.length > 0 && (
                <div className="pro-modal-skills">
                  <div className="pro-modal-skills-title">
                    <span>⚔️</span> 能力值
                  </div>
                  <div className="pro-modal-skill-grid">
                    {character.skills.map((skill, idx) => (
                      <div key={idx} className="pro-modal-skill">{skill}</div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* 故事介紹 */}
              {character.story && (
                <div className="pro-modal-story">
                  <div className="pro-modal-story-title">
                    <span>📖</span> 故事介紹
                  </div>
                  <div className="pro-modal-story-content">{character.story}</div>
                </div>
              )}

              {/* 社交連結 */}
              {Object.keys(character.social || {}).some(key => character.social[key]) && (
                <div className="pro-modal-social">
                  {character.social.youtube && (
                    <a href={character.social.youtube} target="_blank" rel="noopener noreferrer" className="pro-social-btn youtube">
                      <Youtube size={18} />
                    </a>
                  )}
                  {character.social.instagram && (
                    <a href={character.social.instagram} target="_blank" rel="noopener noreferrer" className="pro-social-btn instagram">
                      <Instagram size={18} />
                    </a>
                  )}
                  {character.social.twitter && (
                    <a href={character.social.twitter} target="_blank" rel="noopener noreferrer" className="pro-social-btn twitter">
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="pro-modal-merchandise" style={{
            background: character.merchandiseBgColor || '#FFFFFF',
            position: 'relative',
            zIndex: 2
          }}>
            {character.merchandiseImages && character.merchandiseImages.length > 0 ? (
              character.merchandiseImages.map((img, idx) => (
                <div key={idx} className="pro-merch-item">
                  <img src={img} alt={`商品${idx + 1}`} />
                </div>
              ))
            ) : (
              [1, 2, 3].map((idx) => (
                <div key={idx} className="pro-merch-item pro-merch-placeholder">
                  <span className="pro-placeholder-text">商品圖片</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pro-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Microsoft JhengHei', 'PingFang TC', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .pro-container {
          min-height: 100vh;
          background: #F8F9FA;
        }

        /* 超大橫幅 */
        .pro-banner {
          min-height: 450px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 80px 40px;
        }

        .pro-banner-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .pro-banner-title {
          font-size: 72px;
          font-weight: 900;
          margin-bottom: 24px;
          letter-spacing: 2px;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
          line-height: 1.2;
        }

        .pro-banner-subtitle {
          font-size: 24px;
          font-weight: 500;
          letter-spacing: 1px;
          opacity: 0.95;
        }

        .pro-banner-edit {
          position: absolute;
          top: 30px;
          left: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
        }

        .pro-banner-edit:hover {
          background: #FFF;
          transform: scale(1.1);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }

        .pro-banner-settings {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          color: #666;
          border: none;
          padding: 16px 32px;
          border-radius: 50px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.15);
        }

        .pro-banner-settings:hover {
          background: #FFF;
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.2);
        }

        /* 響應式 - 橫幅 */
        @media (max-width: 768px) {
          .pro-banner {
            min-height: 350px;
            padding: 120px 30px 60px;
          }

          .pro-banner-title {
            font-size: 42px;
          }

          .pro-banner-subtitle {
            font-size: 18px;
          }

          .pro-banner-edit {
            top: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
          }

          .pro-banner-settings {
            position: static;
            margin: 30px auto 0;
            font-size: 15px;
            padding: 14px 28px;
          }
        }

        /* 設定面板 */
        .settings-panel {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 30px;
          background: #FFF;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .settings-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .settings-header h2 {
          font-size: 28px;
          color: #2C2C2C;
          font-weight: 800;
        }

        .add-character-btn {
          background: #4CAF50;
          color: #FFF;
          border: none;
          padding: 14px 28px;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .add-character-btn:hover {
          background: #45A049;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
        }

        .character-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .character-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: #F8F9FA;
          border-radius: 16px;
          transition: all 0.2s ease;
        }

        .character-item:hover {
          background: #F0F2F5;
        }

        .char-preview {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .char-avatar-small {
          font-size: 40px;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .char-info-small {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .char-info-small strong {
          font-size: 18px;
          color: #2C2C2C;
        }

        .char-info-small span {
          font-size: 14px;
          color: #888;
        }

        .char-actions {
          display: flex;
          gap: 10px;
        }

        .char-actions button {
          padding: 10px 20px;
          border: none;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .char-actions button:first-child {
          background: #2196F3;
          color: #FFF;
        }

        .char-actions button:first-child:hover {
          background: #1976D2;
        }

        .char-actions button.delete {
          background: #F44336;
          color: #FFF;
        }

        .char-actions button.delete:hover {
          background: #D32F2F;
        }

        /* 網格區域 */
        .pro-grid-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 30px;
        }

        .pro-character-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 36px;
        }

        /* 超精緻卡片 */
        .pro-character-card {
          background: #FFF;
          border-radius: 28px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 8px 16px rgba(0,0,0,0.06),
            0 4px 8px rgba(0,0,0,0.04),
            0 0 0 1px rgba(0,0,0,0.02);
          position: relative;
        }

        .pro-character-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
          pointer-events: none;
        }

        .pro-character-card:hover::before {
          opacity: 1;
        }

        .pro-character-card:hover {
          transform: translateY(-16px) scale(1.03);
          box-shadow: 
            0 28px 48px rgba(0,0,0,0.12),
            0 12px 24px rgba(0,0,0,0.08),
            0 0 0 1px rgba(0,0,0,0.04);
        }

        .pro-card-image {
          width: 100%;
          padding-top: 100%;
          position: relative;
          overflow: hidden;
        }

        .pro-card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.6s ease;
          z-index: 2;
        }

        .pro-character-card:hover .pro-card-shine {
          left: 100%;
        }

        .pro-card-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          object-fit: contain;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1));
        }

        .pro-character-card:hover .pro-card-img {
          transform: translate(-50%, -58%) scale(1.08);
          filter: drop-shadow(0 12px 28px rgba(0,0,0,0.15));
        }

        .pro-card-avatar {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 100px;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: drop-shadow(0 8px 16px rgba(0,0,0,0.1));
        }

        .pro-character-card:hover .pro-card-avatar {
          transform: translate(-50%, -58%) scale(1.08);
          filter: drop-shadow(0 12px 28px rgba(0,0,0,0.15));
        }

        .pro-card-info {
          padding: 28px 24px;
          text-align: center;
          background: #FFF;
          position: relative;
          z-index: 3;
        }

        .pro-card-name {
          font-size: 22px;
          font-weight: 800;
          color: #2C2C2C;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
          transition: color 0.3s ease;
        }

        .pro-character-card:hover .pro-card-name {
          color: #FF6B9D;
        }

        .pro-card-title {
          font-size: 14px;
          color: #999;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .pro-character-card:hover .pro-card-title {
          color: #666;
        }

        /* Modal */
        .pro-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
        }

        .pro-modal {
          border: 10px solid;
          border-radius: 32px;
          width: 100%;
          max-width: 1400px;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: modalPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 32px 80px rgba(0,0,0,0.5),
            inset 0 0 100px rgba(255,255,255,0.1);
        }

        @keyframes modalPop {
          from {
            opacity: 0;
            transform: scale(0.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .pro-modal-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 2px solid rgba(0,0,0,0.2);
          background: rgba(255,255,255,0.98);
          color: #666;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          box-shadow: 0 6px 16px rgba(0,0,0,0.15);
        }

        .pro-modal-close:hover {
          transform: rotate(90deg) scale(1.12);
          background: #FFF;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .pro-modal-tag {
          position: absolute;
          top: 24px;
          right: 95px;
          color: #FFF;
          padding: 12px 28px;
          border-radius: 24px;
          font-size: 16px;
          font-weight: 900;
          box-shadow: 
            0 8px 20px rgba(0,0,0,0.35),
            0 4px 10px rgba(0,0,0,0.25);
          letter-spacing: 1px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
          backdrop-filter: blur(4px);
        }

        .pro-modal-content {
          display: grid;
          grid-template-columns: 1fr 2.2fr;
          gap: 60px;
          padding: 90px 70px 50px;
        }

        .pro-modal-left {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px;
        }

        .pro-modal-right {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .pro-modal-name {
          font-size: 48px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 20px;
          letter-spacing: 0.5px;
          text-shadow: 
            0 2px 4px rgba(255,255,255,0.9),
            0 4px 8px rgba(0,0,0,0.15);
          padding-bottom: 12px;
          padding-left: 0;
          padding-right: 0;
          padding-top: 0;
          background: none;
          background-color: transparent;
          border-bottom: 4px solid rgba(0,0,0,0.2);
          border-radius: 0;
          backdrop-filter: none;
          display: inline-block;
          width: fit-content;
          word-break: keep-all;
        }

        .pro-modal-section {
          background: rgba(255,255,255,0.75);
          padding: 20px 24px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .pro-modal-section-title {
          font-size: 16px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          word-break: keep-all;
        }

        .pro-modal-img {
          max-width: 100%;
          max-height: 400px;
          object-fit: contain;
          animation: floatAnimation 6s ease-in-out infinite;
        }

        .pro-modal-emoji {
          font-size: 200px;
          animation: floatAnimation 6s ease-in-out infinite;
        }

        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-16px);
          }
        }

        .pro-modal-right {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .pro-modal-name {
          font-size: 42px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 16px;
          letter-spacing: 0.5px;
          text-shadow: 
            0 2px 4px rgba(255,255,255,0.8),
            0 4px 8px rgba(0,0,0,0.15);
          background: rgba(255,255,255,0.7);
          padding: 12px 18px;
          border-radius: 14px;
          backdrop-filter: blur(10px);
          display: inline-block;
        }

        .pro-modal-features {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pro-modal-detail {
          font-size: 16px;
          color: #1a1a1a;
          line-height: 1.6;
          margin: 0;
          font-weight: 600;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .pro-modal-skills {
          background: rgba(255,255,255,0.75);
          padding: 20px 24px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .pro-modal-skills-title {
          font-size: 16px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          word-break: keep-all;
        }

        .pro-modal-skill-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          row-gap: 10px;
        }

        .pro-modal-skill {
          font-size: 15px;
          color: #1a1a1a;
          line-height: 1.8;
          margin: 0;
          font-weight: 600;
          white-space: nowrap;
          word-break: keep-all;
        }

        .pro-modal-story {
          font-size: 17px;
          color: #1a1a1a;
          line-height: 1.9;
          font-weight: 600;
          background: rgba(255,255,255,0.75);
          padding: 20px 24px;
          border-radius: 16px;
          backdrop-filter: blur(12px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        .pro-modal-story-title {
          font-size: 16px;
          font-weight: 900;
          color: #1a1a1a;
          margin-bottom: 12px;
          letter-spacing: 0.5px;
          display: flex;
          align-items: center;
          gap: 8px;
          word-break: keep-all;
        }

        .pro-modal-story-content {
          font-size: 16px;
          color: #2c2c2c;
          line-height: 1.9;
          font-weight: 500;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .pro-modal-social {
          display: flex;
          gap: 14px;
          margin-top: 20px;
        }

        .pro-social-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFF;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 
            0 6px 16px rgba(0,0,0,0.25),
            0 2px 8px rgba(0,0,0,0.15);
        }

        .pro-social-btn:hover {
          transform: translateY(-6px) scale(1.15);
          box-shadow: 
            0 12px 28px rgba(0,0,0,0.35),
            0 4px 12px rgba(0,0,0,0.2);
        }

        .pro-social-btn.youtube {
          background: #FF0000;
        }

        .pro-social-btn.instagram {
          background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        }

        .pro-social-btn.twitter {
          background: #1DA1F2;
        }

        .pro-modal-merchandise {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          padding: 50px 70px 70px;
          border-top: 3px solid rgba(0,0,0,0.08);
          margin-top: 30px;
        }

        .pro-merch-item {
          aspect-ratio: 1;
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.6);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
        }

        .pro-merch-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .pro-merch-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .pro-merch-placeholder {
          border: 3px dashed rgba(0,0,0,0.2);
          background: rgba(255,255,255,0.4);
        }

        .pro-placeholder-text {
          color: rgba(0,0,0,0.4);
          font-size: 15px;
          font-weight: 700;
        }

        /* 響應式 - Modal */
        @media (max-width: 900px) {
          .pro-modal {
            border-width: 6px;
            border-radius: 24px;
          }

          .pro-modal-close {
            top: 18px;
            right: 18px;
            width: 42px;
            height: 42px;
          }

          .pro-modal-tag {
            top: 18px;
            right: 75px;
            padding: 10px 22px;
            font-size: 14px;
          }

          .pro-modal-content {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 95px 40px 40px;
          }

          .pro-modal-img {
            max-height: 300px;
          }

          .pro-modal-emoji {
            font-size: 150px;
          }

          .pro-modal-skill-grid {
            flex-direction: column;
          }

          .pro-modal-merchandise {
            padding: 30px 40px 40px;
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .pro-modal-content {
            padding: 85px 30px 30px;
          }

          .pro-modal-img {
            max-height: 240px;
          }

          .pro-modal-emoji {
            font-size: 130px;
          }

          .pro-modal-name {
            font-size: 30px;
          }

          .pro-modal-detail,
          .pro-modal-story-content {
            font-size: 15px;
          }

          .pro-modal-skill-grid {
            flex-direction: column;
          }

          .pro-modal-merchandise {
            padding: 25px 30px 30px;
            gap: 12px;
          }
        }

        /* 響應式 - 網格 */
        @media (max-width: 1200px) {
          .pro-character-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .pro-grid-wrapper {
            padding: 40px 20px;
          }

          .pro-character-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .pro-character-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }

        /* 編輯器 */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3000;
          padding: 20px;
        }

        .password-modal {
          background: #FFF;
          border-radius: 20px;
          padding: 40px;
          max-width: 400px;
          width: 100%;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
          animation: modalPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .editor-box {
          background: #FFF;
          border-radius: 28px;
          width: 100%;
          max-width: 750px;
          max-height: 92vh;
          overflow-y: auto;
          padding: 45px;
          box-shadow: 0 32px 80px rgba(0,0,0,0.5);
        }

        .editor-title {
          font-size: 32px;
          font-weight: 900;
          color: #2C2C2C;
          margin-bottom: 35px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-group label {
          font-size: 15px;
          font-weight: 700;
          color: #555;
        }

        .form-group input,
        .form-group textarea {
          padding: 14px 18px;
          border: 2px solid #E0E0E0;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          transition: all 0.2s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #FF6B9D;
          box-shadow: 0 0 0 4px rgba(255, 107, 157, 0.1);
        }

        .form-group textarea {
          resize: vertical;
        }

        .image-upload-area {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: #4CAF50;
          color: #FFF;
          border-radius: 12px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          width: fit-content;
          box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
        }

        .upload-btn:hover {
          background: #45A049;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(76, 175, 80, 0.4);
        }

        .upload-btn.disabled {
          background: #CCC;
          cursor: not-allowed;
          box-shadow: none;
        }

        .image-preview {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #E0E0E0;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .banner-preview {
          position: relative;
          width: 100%;
          height: 220px;
          border-radius: 16px;
          overflow: hidden;
          border: 2px solid #E0E0E0;
          margin-top: 16px;
        }

        .banner-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .remove-image,
        .remove-merchandise {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgba(244, 67, 54, 0.95);
          color: #FFF;
          border: none;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          font-weight: 700;
        }

        .remove-image:hover,
        .remove-merchandise:hover {
          background: #D32F2F;
          transform: scale(1.15);
        }

        .merchandise-previews {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .merchandise-preview {
          position: relative;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #E0E0E0;
        }

        .merchandise-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .editor-actions {
          display: flex;
          gap: 14px;
          justify-content: flex-end;
          margin-top: 35px;
        }

        .btn-cancel,
        .btn-save {
          padding: 14px 32px;
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-cancel {
          background: #E0E0E0;
          color: #666;
        }

        .btn-cancel:hover {
          background: #D0D0D0;
        }

        .btn-save {
          background: #FF6B9D;
          color: #FFF;
          box-shadow: 0 4px 12px rgba(255, 107, 157, 0.3);
        }

        .btn-save:hover {
          background: #E5528C;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(255, 107, 157, 0.4);
        }

        /* 響應式 - 編輯器 */
        @media (max-width: 768px) {
          .editor-box {
            padding: 35px 30px;
          }

          .editor-title {
            font-size: 26px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* 超大橫幅 */}
      <div className="pro-banner" style={{
        background: bannerSettings.showImage && bannerSettings.bannerImage 
          ? `url(${bannerSettings.bannerImage})`
          : `linear-gradient(135deg, ${bannerSettings.bgColor} 0%, ${bannerSettings.bgGradient} 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        {bannerSettings.showImage && bannerSettings.overlay && (
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 1
          }}></div>
        )}
        
        {/* 管理員登入/管理按鈕 */}
        {!isAdmin ? (
          <button 
            className="pro-banner-settings"
            onClick={() => {
              setPasswordAction('login');
              setShowPasswordModal(true);
            }}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255,255,255,0.3)',
              backdropFilter: 'blur(10px)',
              color: '#666',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '50px',
              fontSize: '14px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              opacity: '0.6',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '1'}
            onMouseLeave={(e) => e.target.style.opacity = '0.6'}
          >
            🔒 登入
          </button>
        ) : (
          <>
            <button 
              className="pro-banner-edit"
              onClick={handleBannerEditClick}
              title="編輯橫幅"
            >
              <Edit2 size={24} />
            </button>

            <button 
              className="pro-banner-settings"
              onClick={handleSettingsClick}
            >
              <Settings size={20} />
              ✅ 管理角色
            </button>
            
            <button 
              className="pro-banner-settings"
              onClick={() => {
                if (confirm('確定要登出嗎?')) {
                  setIsAdmin(false);
                  setShowSettings(false);
                  setShowBannerSettings(false);
                  alert('👋 已登出');
                }
              }}
              style={{
                position: 'absolute',
                top: '110px',
                right: '30px',
                background: 'rgba(255,255,255,0.95)',
                backdropFilter: 'blur(10px)',
                color: '#f44336',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                transition: 'all 0.3s ease'
              }}
            >
              🚪 登出
            </button>
          </>
        )}

        <div className="pro-banner-content">
          <h1 className="pro-banner-title" style={{ color: bannerSettings.titleColor }}>
            {bannerSettings.title}
          </h1>
          <p className="pro-banner-subtitle" style={{ color: bannerSettings.subtitleColor }}>
            {bannerSettings.subtitle}
          </p>
        </div>
      </div>

      {/* 橫幅編輯器 */}
      {showBannerSettings && (
        <BannerEditor 
          settings={bannerSettings}
          onSave={(newSettings) => {
            setBannerSettings(newSettings);
            setShowBannerSettings(false);
          }}
          onCancel={() => setShowBannerSettings(false)}
        />
      )}

      {/* 設定面板 */}
      {showSettings && (
        <div className="settings-panel">
          <div className="settings-header">
            <h2>角色管理</h2>
            <button 
              className="add-character-btn"
              onClick={() => setEditingCharacter({
                name: '',
                title: '',
                avatar: '😀',
                bgColor: '#FFE5EC',
                merchandiseBgColor: '#FFFFFF',
                imageUrl: '',
                tagText: '明星介紹',
                birthYear: '',
                birthday: '',
                features: [],
                dream: '',
                personality: '',
                story: '',
                merchandiseImages: [],
                videos: [],
                social: {}
              })}
            >
              ＋ 新增角色
            </button>
          </div>
          
          <div className="character-list">
            {characters.map(char => (
              <div key={char.id} className="character-item">
                <div className="char-preview">
                  {char.imageUrl ? (
                    <img src={char.imageUrl} alt={char.name} style={{ width: 60, height: 60, objectFit: 'cover', borderRadius: 12 }} />
                  ) : (
                    <span className="char-avatar-small">{char.avatar}</span>
                  )}
                  <div className="char-info-small">
                    <strong>{char.name}</strong>
                    <span>{char.title}</span>
                  </div>
                </div>
                <div className="char-actions">
                  <button onClick={() => setEditingCharacter(char)}>編輯</button>
                  <button onClick={() => handleDeleteCharacter(char.id)} className="delete">刪除</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 角色編輯器 */}
      {editingCharacter && (
        <CharacterEditor 
          character={editingCharacter}
          onSave={handleSaveCharacter}
          onCancel={() => setEditingCharacter(null)}
        />
      )}

      {/* 角色網格 */}
      <div className="pro-grid-wrapper">
        <div className="pro-character-grid">
          {characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCharacter && (
        <Modal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
      )}

      {/* 密碼輸入 Modal */}
      {showPasswordModal && (
        <div className="modal-overlay" onClick={() => {
          setShowPasswordModal(false);
          setPasswordInput('');
        }}>
          <div className="password-modal" onClick={(e) => e.stopPropagation()}>
            <h2 style={{ marginBottom: '20px', fontSize: '24px', color: '#333' }}>🔒 管理員登入</h2>
            <p style={{ marginBottom: '20px', color: '#666' }}>請輸入密碼以編輯內容</p>
            <input 
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handlePasswordSubmit();
                }
              }}
              placeholder="請輸入密碼"
              autoFocus
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: '16px',
                border: '2px solid #ddd',
                borderRadius: '8px',
                marginBottom: '20px',
                outline: 'none'
              }}
            />
            <div style={{ display: 'flex', gap: '12px' }}>
              <button 
                onClick={handlePasswordSubmit}
                style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: '700',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                確認
              </button>
              <button 
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordInput('');
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  fontSize: '16px',
                  fontWeight: '700',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer'
                }}
              >
                取消
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterShowcasePro;