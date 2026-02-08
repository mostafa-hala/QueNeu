
import { Language } from './types';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      solutions: 'Solutions',
      system: 'System',
      tech: 'Tech',
      contact: 'Contact',
      bookDemo: 'Book Demo'
    },
    hero: {
      titlePart1: 'Where',
      titlePart2: 'Wisdom',
      titlePart3: 'Becomes',
      titlePart4: 'Future',
      desc: 'We translate professional intuition into immersive board game scenarios. Stop experience loss and transfer real-world expertise to the next generation through AI-driven gamification.',
      contactBtn: 'Contact Us',
      servicesBtn: 'Our Services',
      elderWisdom: 'ELDER WISDOM',
      futurePotential: 'FUTURE POTENTIAL',
      transferring: 'Transferring Intuition...',
      success: 'PKT_XFER: SUCCESS'
    },
    about: {
      tag: 'The Core Mission',
      title: 'Why QueNeu Exists',
      crisisTitle: 'The Silent Crisis of Institutional Knowledge Loss',
      crisisDesc: 'Organizations face significant knowledge loss when experienced employees retire, resulting in decreased efficiency and the risk of losing critical expertise that influences decision-making quality.',
      failText: 'Current training methods fail because they focus on information, not intuition. QueNeu was built to capture the unrecordable and put you in a challenge to gain the real experience.',
      methodology: 'Learn about our methodology',
      chartTitle: 'Current State of Knowledge Transfer',
      chartSub: 'Industry Effectiveness Breakdown',
      impactTitle: 'The 3% Challenge',
      impactDesc: 'Only 3% of organizations believe their knowledge transfer is extremely effective. QueNeu exists to bridge this gap, turning the expertise of retirees into a playable, scalable future.',
      stats: {
        somewhat: 'Somewhat Effective',
        minimally: 'Minimally Effective',
        uneffective: 'Uneffective',
        extremely: 'Extremely Effective'
      }
    },
    solutions: {
      title: 'Ecosystem of Experience',
      sub: 'Scaling wisdom across every sector of life.',
       uploadExperience: 'Share Experience',
  earnExperience: 'Earn Experience',
      learnMore: 'Learn More',
      companies: {
        title: 'For Companies',
        subtitle: 'The Retiree Bridge',
        desc: 'Stop knowledge bleed. We capture the deep intuition of your departing experts and turn it into high-stakes board games for incoming talent.'
      },
      experts: {
        title: 'For Experts',
        subtitle: 'The Master\'s Board',
        desc: 'Monetize your lifetime of experience. Create and sell personalized board games that allow others to live your career highlights.'
      },
      families: {
        title: 'For Families',
        subtitle: 'Heritage & Connection',
        desc: 'Preserve family history through play. Let children and grandchildren explore the stories of their elders through mysterious challenges.'
      }
    },
    gameSystem: {
      title: 'The Experience Pillars',
      desc: 'Every QueNeu game is built on ten non-negotiable foundations that ensure knowledge is not just heard, but felt.',
      turnBtn: 'Turn into Physical Board Game',
      backBtn: 'Back to Pillars',
      physicalTitle: 'The Physical System',
      anatomyTitle: 'Anatomy of a QueNeu Session',
      requestPdf: 'Request Specifications PDF',
      boardNote: 'The board is designed as a living circuit. Every decision made on these tiles is processed by the AI core.'
    },
    tech: {
      title: 'Powered by Ethical Intelligence',
      sub: 'We don\'t just use AI; we use AI to keep the human touch alive.',
      capture: {
        title: 'AI Knowledge Capture',
        desc: 'Natural Language Processing that interviews retirees, extracting the nuances of "Gut Feeling" and "Instinct" that manuals miss.'
      },
      synthesis: {
        title: 'Scenario Synthesis',
        desc: 'Our proprietary AI engine generates millions of branching narrative possibilities based on a single real-world case study.'
      },
      ar: {
        title: 'AR Environmental Engine',
        desc: 'A custom augmented reality layer that projects situational feedback onto the physical board tokens in real-time.'
      }
    },
    expertUpload: {
  backHome: 'Back to Home',
  login: 'Login',
  title: 'Upload Your Experience',
  sub: 'Turn your real career decisions into interactive boards that teach intuition, not just information.',
  steps: {
    s1Title: 'Upload Story',
    s1Desc: 'Share a case, decision, failure, or success moment.',
    s2Title: 'AI Structures It',
    s2Desc: 'We extract options, risks, and branching scenarios.',
    s3Title: 'Publish & Earn',
    s3Desc: 'Players learn from your board — you monetize your legacy.'
  },
  packagesTitle: 'Creator Packages',
  mostPopular: 'Most Popular',
  tiers: {
    free: {
      name: 'Free Creator',
      price: '',
      per: '',
      desc: 'Perfect for sharing your first major life lesson.',
      cta: 'Choose Free',
      bullets: ['Create 1 Board', 'Earn $5 per purchase', 'Basic Analytics']
    },
    pro: {
      name: 'Creator PRO',
      price: '$25',
      per: '/mo',
      desc: 'Build a steady income stream from your expertise.',
      cta: 'Choose PRO',
      bullets: ['Create up to 3 Boards', 'Earn $10 per purchase', 'Advanced Insights']
    },
    unlimited: {
      name: 'Unlimited',
      price: '$50',
      per: '/mo',
      desc: 'For active creators treating this as a serious venture.',
      cta: 'Choose Unlimited',
      bullets: ['Unlimited Boards', 'Earn $15 per purchase', 'Priority Support']
    }
  },
  selected: 'Selected',
  nextText: 'Next, we’ll guide you to create your Expert profile and start uploading your first experience.',
  continue: 'Continue'
},
studentPricing: {
  title: 'Unlock Your Future',
  sub: 'Master critical skills through real-world simulations crafted by industry veterans.',
  free: {
    name: 'Free Explorer',
    price: '$0',
    desc: 'Join the platform and pay only for what you play.',
    bullets: ['Free Platform Access', 'Pay-per-Board access', 'Community Profile'],
    cta: 'Join for Free'
  },
  plus: {
    badge: 'BEST VALUE',
    name: 'Player Plus',
    price: '$60',
    per: '/month',
    desc: 'Unlock unlimited learning opportunities.',
    bullets: ['Unlimited Access to All Boards', 'Exclusive Simulation Events', 'Advanced Career Matching'],
    cta: 'Get Unlimited Access'
  },
  boardPacks: {
    title: 'Board Packs',
    packs: [
      { gems: 1, tag: 'Starter', price: '$20', desc: '4 Stories Pack', note: '$5 per story' },
      { gems: 2, tag: 'Standard', price: '$30', desc: '8 Stories Pack', note: 'Save 25%' },
      { gems: 3, tag: 'Epic', price: '$40', desc: '12 Stories Pack', note: 'Best Value ($3.3/story)' }
    ]
  },
  form: {
    title: 'Create Your Student Profile',
    sub: 'Start learning from real experiences.',
    username: 'Username',
    email: 'Email',
    cta: 'Create My Profile'
  }
}

,
    contact: {
      title: 'Let’s Secure the Future of Wisdom',
      desc: 'Ready to implement QueNeu in your organization or family? Connect with our team to discuss custom board game development.',
      labels: {
        name: 'Full Name',
        company: 'Company / Interest',
        email: 'Email Address',
        message: 'Message',
        send: 'Send Transmission'
      },
      placeholders: {
        message: 'Tell us how we can help translate your wisdom...'
      },
      info: {
        email: 'Email Us',
        call: 'Call Us',
        visit: 'Visit Us'
      }
    },
    demo: {  // هذا هو الكائن الصحيح
      title: 'Ready to Translate Wisdom into the Future?',
      desc: 'Experience the world\'s first AI engine dedicated to preserving professional intuition. Your journey starts here.',
      btn: 'Start Now',
      back: 'Go Back',
      comingSoon: 'cComing Soon',  // تأكد من وجود هذه الخاصية هنا
      steps: ['Capture Intuition', 'Generate Scenario', 'Deploy System']
    },
    footer: {
      quote: '"Where Wisdom Becomes Future"',
      rights: '© 2025 QueNeu AI Development. All rights reserved.'
    }
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      about: 'عن الشركة',
      solutions: 'الحلول',
      system: 'النظام',
      tech: 'التكنولوجيا',
      contact: 'اتصل بنا',
      bookDemo: 'احجز عرضاً'
    },
    hero: {
      titlePart1: 'حيث',
      titlePart2: 'الحكمة',
      titlePart3: 'تصبح',
      titlePart4: 'مستقبلاً',
      desc: 'نترجم الحدس المهني إلى سيناريوهات ألعاب لوحية غامرة. أوقف فقدان الخبرات وانقل الخبرة الواقعية للجيل القادم من خلال الألعاب القائمة بالذكاء الاصطناعي.',
      contactBtn: 'اتصل بنا',
      servicesBtn: 'خدماتنا',
      elderWisdom: 'حكمة الخبراء',
      futurePotential: 'إمكانيات المستقبل',
      transferring: 'جاري نقل الحدس...',
      success: 'تم النقل بنجاح'
    },
    about: {
      tag: 'المهمة الجوهرية',
      title: 'لماذا توجد كيو نيو',
      crisisTitle: 'أزمة صامتة في فقدان المعرفة المؤسسية',
      crisisDesc: 'تواجه المؤسسات فقدانًا كبيرًا للمعرفة عند تقاعد الموظفين ذوي الخبرة، مما يؤدي إلى انخفاض الكفاءة وخطر فقدان الخبرة الحاسمة التي تؤثر على جودة اتخاذ القرار.',
      failText: 'تفشل طرق التدريب الحالية لأنها تركز على المعلومات وليس الحدس. تم بناء QueNeu لالتقاط ما لا يمكن تسجيله ووضعك في تحدٍ لاكتساب الخبرة الحقيقية.',
      methodology: 'تعرف على منهجيتنا',
      chartTitle: 'الوضع الحالي لنقل المعرفة',
      chartSub: 'تحليل الفعالية في الصناعة',
      impactTitle: 'تحدي الـ 3٪',
      impactDesc: 'فقط 3٪ من المؤسسات تعتقد أن نقل المعرفة لديها فعال للغاية. QueNeu موجودة لسد هذه الفجوة، وتحويل خبرة المتقاعدين إلى مستقبل قابل للعب.',
      stats: {
        somewhat: 'فعالة نوعاً ما',
        minimally: 'فعالة بالحد الأدنى',
        uneffective: 'غير فعالة',
        extremely: 'فعالة للغاية'
      }
    },
    solutions: {
      title: 'نظام الخبرة المتكامل',
      sub: 'توسيع نطاق الحكمة عبر كل قطاعات الحياة.',
        uploadExperience: 'نشر خبرتك',
  earnExperience: 'اكسب خبرة',
      learnMore: 'اقرأ المزيد',
      companies: {
        title: 'للشركات',
        subtitle: 'جسر المتقاعدين',
        desc: 'أوقف تسرب المعرفة. نحن نلتقط الحدس العميق لخبرائك المغادرين ونحوله إلى ألعاب لوحية عالية المخاطر للمواهب القادمة.'
      },
      experts: {
        title: 'للخبراء',
        subtitle: 'لوحة المعلم',
        desc: 'استثمر في حياتك من الخبرة. قم بإنشاء وبيع ألعاب لوحية مخصصة تسمح للآخرين بالعيش في أبرز محطات حياتك المهنية.'
      },
      families: {
        title: ' للعائلات',
        subtitle: 'التراث والاتصال',
        desc: 'حافظ على تاريخ العائلة من خلال اللعب. دع الأطفال والأحفاد يستكشفون قصص أجدادهم من خلال تحديات غامضة ومخصصة.'
      }
    },
    gameSystem: {
      title: 'أركان التجربة',
      desc: 'كل لعبة في كيو نيو مبنية على عشرة أسس غير قابلة للتفاوض تضمن ألا يتم سماع المعرفة فحسب، بل الشعور بها.',
      turnBtn: 'تحويل إلى لعبة لوحية فيزيائية',
      backBtn: 'العودة للأركان',
      physicalTitle: 'النظام الفيزيائي',
      anatomyTitle: 'تشريح جلسة كيو نيو',
      requestPdf: 'طلب ملف المواصفات PDF',
      boardNote: 'تم تصميم اللوحة كدائرة حية. تتم معالجة كل قرار يتخذ على هذه المربعات بواسطة قلب الذكاء الاصطناعي.'
    },
    tech: {
      title: 'مدعوم بذكاء أخلاقي',
      sub: 'نحن لا نستخدم الذكاء الاصطناعي فحسب؛ بل نستخدمه للحفاظ على اللمسة الإنسانية حية.',
      capture: {
        title: 'التقاط المعرفة بالذكاء الاصطناعي',
        desc: 'معالجة اللغة الطبيعية التي تحاور المتقاعدين، وتستخرج الفروق الدقيقة في "الشعور الداخلي" و"الغريزة" التي تفقدها الكتيبات.'
      },
      synthesis: {
        title: 'تركيب السيناريوهات',
        desc: 'محرك الذكاء الاصطناعي الخاص بنا يولد الملايين من إمكانيات السرد المتفرعة بناءً على دراسة حالة واحدة من الواقع.'
      },
      ar: {
        title: 'محرك البيئة بالواقع المعزز',
        desc: 'طبقة واقع معزز مخصصة تعرض ملاحظات ظرفية على قطع اللوحة الفيزيائية في الوقت الفعلي.'
      }
    },
    expertUpload: {
  backHome: 'العودة للرئيسية',
  login: 'تسجيل الدخول',
  title: 'ارفع خبرتك',
  sub: 'حوّل قراراتك المهنية الحقيقية إلى لوحات تفاعلية تُعلّم الحدس وليس المعلومات فقط.',
  steps: {
    s1Title: 'ارفع القصة',
    s1Desc: 'شارك حالة أو قرار أو فشل أو نجاح مهم.',
    s2Title: 'الذكاء الاصطناعي ينظمها',
    s2Desc: 'نستخرج الخيارات والمخاطر وتفرعات السيناريو.',
    s3Title: 'انشر واربح',
    s3Desc: 'يتعلم اللاعبون من لوحتك — وأنت تستثمر إرثك.'
  },
  packagesTitle: 'باقات صُنّاع الخبرة',
  mostPopular: 'الأكثر شيوعاً',
  tiers: {
    free: {
      name: 'صانع مجاني',
      price: '$0',
      per: '/شهرياً',
      desc: 'مناسب لمشاركة أول تجربة قوية لديك.',
      cta: 'اختيار المجانية',
      bullets: ['إنشاء لوحة واحدة', 'ربح $5 لكل شراء', 'تحليلات أساسية']
    },
    pro: {
      name: 'صانع برو',
      price: '$25',
      per: '/شهرياً',
      desc: 'ابنِ دخلاً ثابتاً من خبرتك.',
      cta: 'اختيار برو',
      bullets: ['حتى 3 لوحات', 'ربح $10 لكل شراء', 'تحليلات متقدمة']
    },
    unlimited: {
      name: 'غير محدود',
      price: '$50',
      per: '/شهرياً',
      desc: 'للخبراء النشطين الذين يتعاملون معها بجدية.',
      cta: 'اختيار غير المحدود',
      bullets: ['لوحات غير محدودة', 'ربح $15 لكل شراء', 'دعم أولوية']
    }
  },
  selected: 'تم الاختيار',
  nextText: 'الخطوة التالية: سنوجّهك لإنشاء ملف خبير ثم تبدأ برفع أول تجربة لك.',
  continue: 'متابعة'
},
studentPricing: {
  title: 'افتح مستقبلك',
  sub: 'اتقن مهارات حقيقية عبر محاكاة واقعية صممها خبراء.',
  free: {
    name: 'مستكشف مجاني',
    price: '$0',
    desc: 'انضم للمنصة وادفع فقط مقابل ما تلعبه.',
    bullets: ['دخول مجاني للمنصة', 'الدفع حسب كل لعبة', 'ملف مجتمعي'],
    cta: 'انضم مجاناً'
  },
  plus: {
    badge: 'أفضل قيمة',
    name: 'الباقة المميزة',
    price: '$60',
    per: '/شهرياً',
    desc: 'افتح فرص تعلم غير محدودة.',
    bullets: ['وصول غير محدود لكل الألعاب', 'فعاليات محاكاة حصرية', 'مطابقة وظيفية متقدمة'],
    cta: 'احصل على وصول غير محدود'
  },
  boardPacks: {
    title: 'حزم الألعاب',
    packs: [
      { gems: 1, tag: 'بداية', price: '$20', desc: 'حزمة 4 قصص', note: '$5 لكل قصة' },
      { gems: 2, tag: 'قياسية', price: '$30', desc: 'حزمة 8 قصص', note: 'وفر 25%' },
      { gems: 3, tag: 'ملحمية', price: '$40', desc: 'حزمة 12 قصة', note: 'أفضل قيمة' }
    ]
  },
  form: {
    title: 'أنشئ حساب الطالب',
    sub: 'ابدأ التعلم من تجارب حقيقية.',
    username: 'اسم المستخدم',
    email: 'البريد الإلكتروني',
    cta: 'إنشاء الحساب'
  }
}

,
    contact: {
      title: 'لنؤمن مستقبل الحكمة معاً',
      desc: 'هل أنت مستعد لتنفيذ كيو نيو في مؤسستك أو عائلتك؟ تواصل مع فريقنا لمناقشة تطوير ألعاب لوحية مخصصة.',
      labels: {
        name: 'الاسم الكامل',
        company: 'الشركة / الاهتمام',
        email: 'البريد الإلكتروني',
        message: 'الرسالة',
        send: 'إرسال الإشارة'
      },
      placeholders: {
        message: 'أخبرنا كيف يمكننا مساعدتك في ترجمة حكمتك...'
      },
      info: {
        email: 'راسلنا',
        call: 'اتصل بنا',
        visit: 'زورونا'
      }
    },
    demo: {
      title: 'هل أنت مستعد لترجمة الحكمة إلى المستقبل؟',
      desc: 'اختبر أول محرك ذكاء اصطناعي في العالم مخصص للحفاظ على الحدس المهني. رحلتك تبدأ هنا.',
      btn: 'ابدأ الآن',
      back: 'العودة',
      comingSoon: 'ققريبًا ',

      steps: ['التقاط الحدس', 'توليد السيناريو', 'نشر النظام']
    },
    footer: {
      quote: '"حيث تتحول الحكمة إلى مستقبل"',
      rights: '© 2025 كيو نيو لتطوير الذكاء الاصطناعي. جميع الحقوق محفوظة.'
    }
  }
};
