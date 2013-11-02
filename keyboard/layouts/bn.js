

    Keyboards.bn = {
	
      label: 'Bangla',
      menuLabel: 'বাংলা',
      alternateLayoutKey: '?১২৩',
      basicLayoutKey: 'কখগ',
      width: 11,
      alt: {
	  
        'দ': 'ধ',
        'ী': 'ঈ',
        'ূ': 'ঊ',
        'র': 'ড়',
        'ট': 'ঠ',
        'এ': 'ঐ',
        'ু': 'উ',
        'ি': 'ই',
        'ও': 'ঔ',
        'প': 'ফ',
        'ে': 'ৈ',
        'া': 'অ',
        'স': 'ষ',
        'ড': 'ঢ',
        'ত': 'থৎ',
        'গ': 'ঘ',
        'হ': 'ঃ',
        'জ': 'ঝ',
        'ক': 'খ',
        'ল': 'ং',
        'য়': 'য',
        'শ': 'ঢ়',
        'চ': 'ছ',
        'আ': 'ঋ',
        'ব': 'ভ',
        'ন': 'ণ',
        'ম': 'ঙ',
        '।': 'ঁ'
      },
      keys: [
        [
          { value: 'দ'}, { value: 'ূ' }, { value: 'ী' } , { value: 'র'},
          { value: 'ট'} , { value: 'এ'}, { value: 'ু' } , { value: 'ি'},
          { value: 'ও'}, { value: 'প'}, { value: 'ে' }
        ],
        [
          { value: 'া' }, { value: 'স' }, { value: 'ড' }, { value: 'ত' },
          { value: 'গ' }, { value: 'হ' }, { value: 'জ' }, { value: 'ক' },
          { value: 'ল' }, { value: 'ো' }
        ],
        [
          { value: '⇪', ratio: 1.5, keyCode: KeyEvent.DOM_VK_CAPS_LOCK },
          { value: 'য়' }, { value: 'শ' }, { value: 'চ' }, { value: 'আ' },
          { value: 'ব' }, { value: 'ন' }, { value: 'ম' }, { value: '।' },
          { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
        ],
        [
          { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
          { value: '্ ' },
          { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
        ]
      ],
      upperCase: {
        'দ': 'ধ',
        'ী': 'ঈ',
        'ূ': 'ঊ',
        'র': 'ড়',
        'ট': 'ঠ',
        'এ': 'ঐ',
        'ু': 'উ',
        'ি': 'ই',
        'ও': 'ঔ',
        'প': 'ফ',
        'ে': 'ৈ',
        'া': 'অ',
        'স': 'ষ',
        'ড': 'ঢ',
        'ত': 'থ',
        'গ': 'ঘ',
        'হ': 'ঃ',
        'জ': 'ঝ',
        'ক': 'খ',
        'ল': 'ং',
        'য়': 'য',
        'শ': 'ঢ়',
        'চ': 'ছ',
        'আ': 'ঋ',
        'ব': 'ভ',
        'ন': 'ণ',
        'ম': 'ঙ',
        '।': 'ঁ'
      },
      alternateLayout: {
        alt: {
          '০': 'º',
          '৳': '€ £ ¥ R $',
          '?': '¿',
          '!': '¡'
        },
        keys: [
          [
            { value: '১' }, { value: '২' }, { value: '৩' } , { value: '৪' },
            { value: '৫' } , { value: '৬' }, { value: '৭' } , { value: '৮' },
            { value: '৯' }, { value: '০' }
          ],
          [
            { value: '@' }, { value: '#' }, { value: '৳' }, { value: '%' },
            { value: '&' } , { value: '*' }, { value: '-' }, { value: '+' },
            { value: '(' }, { value: ')' }
          ],
          [
            { value: 'ALT', ratio: 1.5, keyCode: KeyEvent.DOM_VK_ALT },
            { value: '!' }, , { value: ':' },
            { value: ';' }, { value: '/' }, { value: '?' },
            { value: '⌫', ratio: 1.5, keyCode: KeyEvent.DOM_VK_BACK_SPACE }
          ],
          [
            { value: '&nbsp', ratio: 9, keyCode: KeyboardEvent.DOM_VK_SPACE },
            { value: '↵', ratio: 2, keyCode: KeyEvent.DOM_VK_RETURN }
          ]
        ]
      }
    };
