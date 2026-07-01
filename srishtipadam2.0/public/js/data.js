/**
 * Srishtipadham Website - Data & Translations
 * Contains bilingual translations and mockup databases for Books, Team, and updates.
 */

const SrishtipadhamData = {
  translations: {
    en: {
      // Navigation
      nav_home: "Home",
      nav_books: "Books",
      nav_team: "Our Team",
      nav_updates: "Updates",
      nav_contact: "Contact Us",
      nav_join: "Join Us",
      nav_menu_title: "Navigation",
      btn_back_home: "Back to Home",
      drawer_settings: "Settings",
      
      // Hero
      tagline: "Empowering Writers, Preserving Literature",
      cta_explore: "Explore Books",
      cta_join: "Join Our Community",
      
      // About Us
      about_title: "About Srishtipadham",
      about_desc: "Srishtipadham is a premier literary community and publication organization based in Kerala, India. Founded with a vision to nurture creative minds, we bridge the gap between aspiring writers and readers. Through our extensive district-wise network and publication initiatives, we strive to enrich the Malayalam literary landscape and preserve our rich cultural heritage for future generations.",
      vision_title: "Our Vision",
      vision_desc: "To establish a vibrant, inclusive, and globally recognized platform for Malayalam literature, empowering every creative voice to express, publish, and inspire without boundaries.",
      mission_title: "Our Mission",
      mission_desc: "To discover talent at the grassroots level, publish high-quality literary works, organize engaging literary events across all Kerala districts, and build a supportive ecosystem for writers.",
      
      // What We Do
      wwd_title: "What We Do",
      wwd_publishing: "Book Publishing",
      wwd_publishing_desc: "From editing to cover design and printing, we provide complete, professional publishing support to authors.",
      wwd_community: "Writer Community Building",
      wwd_community_desc: "Creating platforms for writers to share ideas, critique works, and grow together through local chapters.",
      wwd_events: "Literary Events",
      wwd_events_desc: "Organizing seminars, book releases, writing workshops, and cultural fests across Kerala.",
      wwd_units: "District Units",
      wwd_units_desc: "Operating active local units in all 14 districts of Kerala to coordinate grassroots literary work.",
      
      // Achievements
      ach_title: "Our Achievements",
      ach_books: "Books Published",
      ach_writers: "Writers Supported",
      ach_events: "Events Conducted",
      ach_chapters: "District Chapters",
      
      // Gallery
      gallery_title: "Moments & Memories",
      
      // Team
      team_title: "Our Team",
      team_subtitle: "The visionary minds steering the literary journey of Srishtipadham",
      
      // Updates
      updates_title: "Updates & Announcements",
      updates_subtitle: "Stay updated with our latest activities, upcoming events, and book releases",
      updates_filter_all: "All Updates",
      updates_filter_events: "Events",
      updates_filter_releases: "Book Releases",
      updates_filter_announcements: "Announcements",
      event_date: "Date",
      event_venue: "Venue",
      event_close: "Close",
      
      // Contact Us
      contact_title: "Contact Us",
      contact_subtitle: "Reach out to us for publishing inquiries, event coordination, or joining our district units.",
      contact_phone: "Phone Numbers",
      contact_email: "Email Address",
      contact_chat_whatsapp: "Chat on WhatsApp",
      contact_call_now: "Call Now",
      contact_email_now: "Send Email",
      contact_map: "Find Us on Google Maps",
      
      // Join Us
      join_title: "Why Join Srishtipadham?",
      join_subtitle: "Become part of Kerala's fastest-growing literary family",
      join_b1_title: "Community Opportunities",
      join_b1_desc: "Connect with veteran writers, readers, and literary critics in your local district chapter.",
      join_b2_title: "Publishing Support",
      join_b2_desc: "Get professional guidance, mentorship, editing support, and subsidized publishing for your works.",
      join_b3_title: "Networking & Growth",
      join_b3_desc: "Participate in exclusive state-level workshops, seminars, and book fests to expand your reach.",
      join_btn: "Click Here to Join",
      
      // Join Form Modal
      form_title: "Join Srishtipadham Community",
      form_name: "Full Name",
      form_email: "Email Address",
      form_phone: "Phone Number",
      form_district: "District",
      form_district_placeholder: "Select your district",
      form_occupation: "Occupation",
      form_message: "Why do you want to join?",
      form_submit: "Submit Application",
      form_success: "Thank you for joining! Our district representative will contact you soon.",
      form_validation_error: "Please fill in all fields correctly.",
      
      // Footer
      footer_desc: "Srishtipadham is a literary community and publication platform dedicated to nurturing writers and preserving literature in Kerala, India.",
      footer_links: "Quick Links",
      footer_social: "Connect With Us",
      footer_policy: "Privacy Policy",
      footer_terms: "Terms & Conditions",
      footer_rights: "All Rights Reserved.",
      
      // Books Page Specifics
      books_title: "Our Publications",
      books_subtitle: "Explore our collection of masterpieces across fiction, poetry, history, and essays",
      search_placeholder: "Search books by title, author, or genre...",
      filter_category: "All Categories",
      filter_price: "Max Price",
      filter_rating: "Min Rating",
      sort_placeholder: "Sort By",
      sort_rating: "Highest Rated",
      sort_price_asc: "Lowest Price",
      sort_newest: "New Arrivals",
      sort_alpha: "Alphabetical",
      book_author: "Author",
      book_category: "Category",
      book_price: "Price",
      book_rating: "Rating",
      book_publish_date: "Publish Date",
      book_read_more: "View Details",
      book_buy_now: "Order Book",
      no_books_found: "No books match your search or filter criteria.",
      clear_filters: "Clear Filters",
      page_prev: "Previous",
      page_next: "Next",
      
      // Districts
      dist_tvm: "Thiruvananthapuram",
      dist_klm: "Kollam",
      dist_pta: "Pathanamthitta",
      dist_alp: "Alappuzha",
      dist_ktm: "Kottayam",
      dist_idk: "Idukki",
      dist_ekm: "Ernakulam",
      dist_tsr: "Thrissur",
      dist_pkd: "Palakkad",
      dist_mpm: "Malappuram",
      dist_wyd: "Wayanad",
      dist_koz: "Kozhikode",
      dist_knr: "Kannur",
      dist_ksr: "Kasaragod"
    },
    ml: {
      // Navigation
      nav_home: "ഹോം",
      nav_books: "പുസ്തകങ്ങൾ",
      nav_team: "ഞങ്ങളുടെ സംഘം",
      nav_updates: "വാർത്തകൾ",
      nav_contact: "ബന്ധപ്പെടുക",
      nav_join: "അംഗമാകുക",
      nav_menu_title: "മെനു",
      btn_back_home: "ഹോം പേജിലേക്ക്",
      drawer_settings: "ക്രമീകരണങ്ങൾ",
      
      // Hero
      tagline: "എഴുത്തുകാരെ ശാക്തീകരിക്കുന്നു, സാഹിത്യത്തെ സംരക്ഷിക്കുന്നു",
      cta_explore: "പുസ്തകങ്ങൾ കാണുക",
      cta_join: "കൂട്ടായ്മയിൽ പങ്കാളിയാകൂ",
      
      // About Us
      about_title: "സൃഷ്ടിപഥത്തെക്കുറിച്ച്",
      about_desc: "കേരളം ആസ്ഥാനമായി പ്രവർത്തിക്കുന്ന പ്രമുഖ സാഹിത്യ കൂട്ടായ്മയും പബ്ലിഷിംഗ് ഓർഗനൈസേഷനുമാണ് സൃഷ്ടിപഥം. വളർന്നുവരുന്ന എഴുത്തുകാർക്കും വായനക്കാർക്കും ഇടയിൽ ഒരു പാലമായി പ്രവർത്തിക്കുക എന്ന ലക്ഷ്യത്തോടെയാണ് ഇത് സ്ഥാപിതമായത്. വിപുലമായ ജില്ലാതല ശൃംഖലകളിലൂടെയും പ്രസിദ്ധീകരണ സംരംഭങ്ങളിലൂടെയും മലയാള സാഹിത്യ രംഗത്തെ സമ്പന്നമാക്കാനും സാംസ്കാരിക പൈതൃകം വരുംതലമുറകൾക്കായി നിലനിർത്താനും ഞങ്ങൾ ശ്രമിക്കുന്നു.",
      vision_title: "ഞങ്ങളുടെ ദർശനം",
      vision_desc: "മലയാള സാഹിത്യത്തിന് ഊർജ്ജസ്വലവും എല്ലാവരെയും ഉൾക്കൊള്ളുന്നതുമായ ഒരു ആഗോള പ്ലാറ്റ്‌ഫോം ഒരുക്കുക, എഴുത്തുക്കാരെ സ്വതന്ത്രമായി ചിന്തിക്കാനും എഴുതാനും പ്രസിദ്ധീകരിക്കാനും പ്രാപ്തരാക്കുക.",
      mission_title: "ഞങ്ങളുടെ ലക്ഷ്യം",
      mission_desc: "പ്രാദേശിക തലത്തിൽ എഴുത്ത് അഭിരുചിയുള്ളവരെ കണ്ടെത്തുക, ഉന്നത നിലവാരമുള്ള സാഹിത്യസൃഷ്ടികൾ പ്രസിദ്ധീകരിക്കുക, കേരളത്തിലെ എല്ലാ ജില്ലകളിലും ആകർഷകമായ സാഹിത്യ പരിപാടികൾ സംഘടിപ്പിക്കുക, എഴുത്തുകാർക്ക് പിന്തുണ നൽകുന്ന ഒരു വ്യവസ്ഥിതി കെട്ടിപ്പടുക്കുക.",
      
      // What We Do
      wwd_title: "പ്രവർത്തനങ്ങൾ",
      wwd_publishing: "പുസ്തക പ്രസിദ്ധീകരണം",
      wwd_publishing_desc: "എഡിറ്റിംഗ്, കവർ ഡിസൈൻ, പ്രിന്റിംഗ് എന്നിവ ഉൾപ്പെടെ ഒരു പുസ്തകത്തിന്റെ എല്ലാ പ്രസിദ്ധീകരണ പ്രവർത്തനങ്ങൾക്കും പ്രൊഫഷണൽ പിന്തുണ നൽകുന്നു.",
      wwd_community: "എഴുത്തുകൂട്ടായ്മ രൂപീകരണം",
      wwd_community_desc: "എഴുത്തുകാർക്ക് ആശയങ്ങൾ പങ്കുവെക്കാനും സൃഷ്ടികൾ വിലയിരുത്താനും ഒരുമിച്ച് വളരാനും പ്രാദേശിക തലങ്ങളിൽ വേദികൾ ഒരുക്കുന്നു.",
      wwd_events: "സാഹിത്യ പരിപാടികൾ",
      wwd_events_desc: "സെമിനാറുകൾ, പുസ്തക പ്രകാശനങ്ങൾ, എഴുത്തു കളരികൾ, സാംസ്കാരിക സദസ്സുകൾ എന്നിവ കേരളത്തിലുടനീളം സംഘടിപ്പിക്കുന്നു.",
      wwd_units: "ജില്ലാ ഘടകങ്ങൾ",
      wwd_units_desc: "സാഹിത്യ പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്നതിനായി കേരളത്തിലെ 14 ജില്ലകളിലും സജീവമായ പ്രാദേശിക യൂണിറ്റുകൾ പ്രവർത്തിക്കുന്നു.",
      
      // Achievements
      ach_title: "നേട്ടങ്ങൾ",
      ach_books: "പ്രസിദ്ധീകരിച്ചവ",
      ach_writers: "പിന്തുണച്ച എഴുത്തുകാർ",
      ach_events: "നടത്തിയ പരിപാടികൾ",
      ach_chapters: "ജില്ലാ ഘടകങ്ങൾ",
      
      // Gallery
      gallery_title: "ചിത്രശാല",
      
      // Team
      team_title: "ഞങ്ങളുടെ സംഘം",
      team_subtitle: "സൃഷ്ടിപഥത്തിന്റെ പ്രയാണത്തിന് നേതൃത്വം നൽകുന്ന സാരഥികൾ",
      
      // Updates
      updates_title: "പുതിയ വിശേഷങ്ങൾ",
      updates_subtitle: "ഞങ്ങളുടെ പുതിയ പ്രവർത്തനങ്ങൾ, വരാനിരിക്കുന്ന പരിപാടികൾ, പുസ്തക പ്രകാശനങ്ങൾ എന്നിവ അറിയുക",
      updates_filter_all: "എല്ലാം",
      updates_filter_events: "പരിപാടികൾ",
      updates_filter_releases: "പുസ്തക പ്രകാശനങ്ങൾ",
      updates_filter_announcements: "അറിയിപ്പുകൾ",
      event_date: "തീയതി",
      event_venue: "സ്ഥലം",
      event_close: "അടക്കുക",
      
      // Contact Us
      contact_title: "ബന്ധപ്പെടുക",
      contact_subtitle: "പുസ്തക പ്രസിദ്ധീകരണം, പരിപാടികളുടെ ഏകോപനം, ജില്ലാ യൂണിറ്റുകളിൽ ചേരൽ എന്നിവയുമായി ബന്ധപ്പെട്ട് ഞങ്ങളുമായി ബന്ധപ്പെടുക.",
      contact_phone: "ഫോൺ നമ്പറുകൾ",
      contact_email: "ഇമെയിൽ വിലാസം",
      contact_chat_whatsapp: "വാട്സാപ്പിൽ ചാറ്റ് ചെയ്യാം",
      contact_call_now: "വിളിക്കുക",
      contact_email_now: "ഇമെയിൽ അയക്കുക",
      contact_map: "ഗൂഗിൾ മാപ്പിൽ കാണുക",
      
      // Join Us
      join_title: "എന്തുകൊണ്ട് സൃഷ്ടിപഥം?",
      join_subtitle: "കേരളത്തിലെ ഏറ്റവും വേഗത്തിൽ വളരുന്ന സാഹിത്യ കുടുംബത്തിന്റെ ഭാഗമാകൂ",
      join_b1_title: "കൂട്ടായ്മയിലെ അവസരങ്ങൾ",
      join_b1_desc: "നിങ്ങളുടെ ജില്ലയിലെ മുതിർന്ന എഴുത്തുകാരുമായും വായനക്കാരുമായും സാഹിത്യ നിരൂപകരുമായും സംവദിക്കുക.",
      join_b2_title: "പ്രസിദ്ധീകരണ പിന്തുണ",
      join_b2_desc: "നിങ്ങളുടെ കൃതികൾ പ്രസിദ്ധീകരിക്കാൻ പ്രൊഫഷണൽ മാർഗ്ഗനിർദ്ദേശവും എഡിറ്റിംഗ് സഹായവും പ്രത്യേക ആനുകൂല്യങ്ങളും നേടുക.",
      join_b3_title: "വളർച്ചയും അവസരങ്ങളും",
      join_b3_desc: "സംസ്ഥാനതല ശിൽപ്പശാലകൾ, സെമിനാറുകൾ, പുസ്തകോത്സവങ്ങൾ എന്നിവയിൽ പങ്കെടുത്ത് നിങ്ങളുടെ കഴിവിനെ വികസിപ്പിക്കുക.",
      join_btn: "ഇപ്പോഴേ അംഗമാകുക",
      
      // Join Form Modal
      form_title: "സൃഷ്ടിപഥത്തിൽ അംഗമാകുക",
      form_name: "പൂർണ്ണമായ പേര്",
      form_email: "ഇമെയിൽ വിലാസം",
      form_phone: "ഫോൺ നമ്പർ",
      form_district: "ജില്ല",
      form_district_placeholder: "ജില്ല തിരഞ്ഞെടുക്കുക",
      form_occupation: "തൊഴിൽ",
      form_message: "എന്തുകൊണ്ട് അംഗമാകാൻ ആഗ്രഹിക്കുന്നു?",
      form_submit: "അപേക്ഷ സമർപ്പിക്കുക",
      form_success: "അംഗത്വ അപേക്ഷ നൽകിയതിന് നന്ദി! ഞങ്ങളുടെ ജില്ലാ പ്രതിനിധി ഉടൻ ബന്ധപ്പെടുന്നതാണ്.",
      form_validation_error: "ദയവായി എല്ലാ വിവരങ്ങളും ശരിയായി രേഖപ്പെടുത്തുക.",
      
      // Footer
      footer_desc: "എഴുത്തുകാരെ ശാക്തീകരിക്കുന്നതിനും മലയാള സാഹിത്യം വളർത്തുന്നതിനുമായി പ്രവർത്തിക്കുന്ന കേരളത്തിലെ പ്രമുഖ സാഹിത്യ കൂട്ടായ്മയാണ് സൃഷ്ടിപഥം.",
      footer_links: "പ്രധാന ലിങ്കുകൾ",
      footer_social: "സോഷ്യൽ മീഡിയ",
      footer_policy: "സ്വകാര്യതാ നയം",
      footer_terms: "വ്യവസ്ഥകൾ",
      footer_rights: "എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
      
      // Books Page Specifics
      books_title: "ഞങ്ങളുടെ പുസ്തകങ്ങൾ",
      books_subtitle: "നോവലുകൾ, കവിതകൾ, ചരിത്രം, ലേഖനങ്ങൾ തുടങ്ങിയ വിപുലമായ ശേഖരം ഇവിടെ കാണാം",
      search_placeholder: "പേര്, എഴുത്തുകാരൻ, വിഭാഗം എന്നിവ അടിസ്ഥാനമാക്കി തിരയുക...",
      filter_category: "എല്ലാ വിഭാഗങ്ങളും",
      filter_price: "പരമാവധി വില",
      filter_rating: "കുറഞ്ഞ റേറ്റിംഗ്",
      sort_placeholder: "ക്രമീകരിക്കുക",
      sort_rating: "ഉയർന്ന റേറ്റിംഗ്",
      sort_price_asc: "കുറഞ്ഞ വില",
      sort_newest: "പുതിയ പുസ്തകങ്ങൾ",
      sort_alpha: "അക്ഷരമാലാക്രമത്തിൽ",
      book_author: "രചയിതാവ്",
      book_category: "വിഭാഗം",
      book_price: "വില",
      book_rating: "റേറ്റിംഗ്",
      book_publish_date: "പ്രസിദ്ധീകരിച്ച തീയതി",
      book_read_more: "വിശദാംശങ്ങൾ",
      book_buy_now: "ഓർഡർ ചെയ്യുക",
      no_books_found: "തിരഞ്ഞെടുത്ത വിഭാഗത്തിൽ പുസ്തകങ്ങൾ ലഭ്യമല്ല.",
      clear_filters: "ഫിൽട്ടറുകൾ നീക്കുക",
      page_prev: "മുൻപിലേക്ക്",
      page_next: "അടുത്തത്",
      
      // Districts
      dist_tvm: "തിരുവനന്തപുരം",
      dist_klm: "കൊല്ലം",
      dist_pta: "പത്തനംതിട്ട",
      dist_alp: "ആലപ്പുഴ",
      dist_ktm: "കോട്ടയം",
      dist_idk: "ഇടുക്കി",
      dist_ekm: "എറണാകുളം",
      dist_tsr: "തൃശ്ശൂർ",
      dist_pkd: "പാലക്കാട്",
      dist_mpm: "മലപ്പുറം",
      dist_wyd: "വയനാട്",
      dist_koz: "കോഴിക്കോട്",
      dist_knr: "കണ്ണൂർ",
      dist_ksr: "കാസർഗോഡ്"
    }
  },
  
  //Team Members
  team: [
    {
      id: 1,
      name: "Dr. K. R. Madhavan",
      name_ml: "ഡോ. കെ. ആർ. മാധവൻ",
      role: "President & Chief Editor",
      role_ml: "പ്രസിഡന്റ് & ചീഫ് എഡിറ്റർ",
      image: "assets/images/team1.svg"
    },
    {
      id: 2,
      name: "Meera Krishnakumar",
      name_ml: "മീര കൃഷ്ണകുമാർ",
      role: "General Secretary",
      role_ml: "ജനറൽ സെക്രട്ടറി",
      image: "assets/images/team2.svg"
    },
    {
      id: 3,
      name: "Prof. P. Ramachandran",
      name_ml: "പ്രൊഫ. പി. രാമചന്ദ്രൻ",
      role: "Publications Director",
      role_ml: "പബ്ലിക്കേഷൻസ് ഡയറക്ടർ",
      image: "assets/images/team3.svg"
    },
    {
      id: 4,
      name: "Anjali Menon",
      name_ml: "അഞ്ജലി മേനോൻ",
      role: "Treasurer & Event Coordinator",
      role_ml: "ട്രഷറർ & ഇവന്റ് കോർഡിനേറ്റർ",
      image: "assets/images/team4.svg"
    },
    {
      id: 5,
      name: "Bindhu PS",
      name_ml: "അഞ്ജലി മേനോൻ",
      role: "State coordinator",
      role_ml: "ട്രഷറർ & ഇവന്റ് കോർഡിനേറ്റർ",
      image: "assets/images/team4.svg"
    }
    
  ],

  // Dummy Updates / Events
  updates: [
    {
      id: 1,
      category: "events",
      title: "State Literary Festival 2026",
      title_ml: "സംസ്ഥാന സാഹിത്യോത്സവം 2026",
      desc: "Annual three-day literary meet featuring prominent writers, poetry readings, and interactive debates.",
      desc_ml: "പ്രമുഖ എഴുത്തുകാർ പങ്കെടുക്കുന്ന ചർച്ചകൾ, കവിയരങ്ങുകൾ, സംവാദങ്ങൾ എന്നിവ ഉൾപ്പെടുന്ന ത്രിദിന സാഹിത്യ മേള.",
      date: "October 12-14, 2026",
      date_ml: "ഒക്ടോബർ 12-14, 2026",
      venue: "Kanakakkunnu Palace, Thiruvananthapuram",
      venue_ml: "കനകക്കുന്ന് കൊട്ടാരം, തിരുവനന്തപുരം",
      image: "assets/images/event1.svg"
    },
    {
      id: 2,
      category: "releases",
      title: "Book Release: 'Nila Paranja Katha'",
      title_ml: "പുസ്തക പ്രകാശനം: 'നീല പറഞ്ഞ കഥ'",
      desc: "Official release of the anthology of short stories written by young writers under Srishtipadham mentorship.",
      desc_ml: "സൃഷ്ടിപഥം മെന്റർഷിപ്പിലൂടെ വളർന്നുവന്ന യുവ എഴുത്തുകാരുടെ ചെറുകഥാ സമാഹാരത്തിന്റെ ഔദ്യോഗിക പ്രകാശനം.",
      date: "July 20, 2026",
      date_ml: "ജൂലൈ 20, 2026",
      venue: "Sahitya Akademi Hall, Thrissur",
      venue_ml: "സാഹിത്യ അക്കാദമി ഹാൾ, തൃശ്ശൂർ",
      image: "assets/images/release1.svg"
    },
    {
      id: 3,
      category: "announcements",
      title: "Call for Manuscripts 2026",
      title_ml: "കൈയെഴുത്തുപ്രതികൾ ക്ഷണിക്കുന്നു 2026",
      desc: "Srishtipadham Publications is now accepting novels and poetry collections from first-time authors.",
      desc_ml: "പുതുമുഖ എഴുത്തുകാരിൽ നിന്നുമുള്ള നോവലുകളും കവിതാസമാഹാരങ്ങളും സൃഷ്ടിപഥം പബ്ലിക്കേഷൻസ് സ്വീകരിക്കുന്നു.",
      date: "Deadline: August 30, 2026",
      date_ml: "അവസാന തീയതി: ഓഗസ്റ്റ് 30, 2026",
      venue: "Online Submission",
      venue_ml: "ഓൺലൈൻ വഴി സമർപ്പിക്കാം",
      image: "assets/images/announcement1.svg"
    },
    {
      id: 4,
      category: "events",
      title: "Writers Workshop Kochi",
      title_ml: "എഴുത്തു കളരി കൊച്ചി",
      desc: "A weekend residential writing boot camp focusing on novel structure, plot development, and copyediting.",
      desc_ml: "നോവൽ നിർമ്മിതി, കഥാപാത്ര രൂപീകരണം എന്നിവ അടിസ്ഥാനമാക്കിയുള്ള ഒരു വാരാന്ത്യ റെസിഡൻഷ്യൽ എഴുത്തു ക്യാമ്പ്.",
      date: "September 05-06, 2026",
      date_ml: "സെപ്റ്റംബർ 05-06, 2026",
      venue: "YMCA Hall, Ernakulam",
      venue_ml: "വൈ.എം.സി.എ ഹാൾ, എറണാകുളം",
      image: "assets/images/event2.svg"
    }
  ],

  // Dummy Books Collection
  books: [
    {
      id: 1,
      title: "Agnichirakukal",
      title_ml: "അഗ്നിച്ചിറകുകൾ",
      author: "P. R. Chandran",
      author_ml: "പി. ആർ. ചന്ദ്രൻ",
      category: "fiction",
      category_ml: "നോവൽ",
      price: 299,
      rating: 4.8,
      publishDate: "2026-01-15",
      publishDate_ml: "2026 ജനുവരി 15",
      desc: "An epic drama following three generations of a family fighting for social reform in mid-20th century Kerala.",
      desc_ml: "ഇരുപതാം നൂറ്റാണ്ടിന്റെ മധ്യത്തിൽ കേരളത്തിലെ സാമൂഹിക പരിഷ്കരണത്തിനായി പോരാടിയ ഒരു കുടുംബത്തിന്റെ മൂന്ന് തലമുറകളുടെ കഥ.",
      image: "assets/images/book1.svg"
    },
    {
      id: 2,
      title: "Mazhavil Thullikal",
      title_ml: "മഴവിൽ തുള്ളികൾ",
      author: "Radha Devi",
      author_ml: "രാധാ ദേവി",
      category: "poetry",
      category_ml: "കവിത",
      price: 150,
      rating: 4.5,
      publishDate: "2026-03-10",
      publishDate_ml: "2026 മാർച്ച് 10",
      desc: "A beautiful collection of micro-poems exploring human emotions, love, and our spiritual connection to nature.",
      desc_ml: "മനുഷ്യവികാരങ്ങൾ, പ്രണയം, പ്രകൃതിയോടുള്ള ആത്മീയ ബന്ധം എന്നിവയെ തൊട്ടുണർത്തുന്ന മനോഹരമായ കവിതാസമാഹാരം.",
      image: "assets/images/book2.svg"
    },
    {
      id: 3,
      title: "Kerala Charithrathile Edukal",
      title_ml: "കേരള ചരിത്രത്തിലെ ഏടുകൾ",
      author: "Dr. Jacob Joseph",
      author_ml: "ഡോ. ജേക്കബ് ജോസഫ്",
      category: "history",
      category_ml: "ചരിത്രം",
      price: 450,
      rating: 4.9,
      publishDate: "2025-11-20",
      publishDate_ml: "2025 നവംബർ 20",
      desc: "An in-depth historical analysis of the maritime trade routes of ancient Kerala and their cultural impact.",
      desc_ml: "പുരാതന കേരളത്തിന്റെ സമുദ്ര വ്യാപാര പാതകളെയും അവ ഉണ്ടാക്കിയ സാംസ്കാരിക സ്വാധീനത്തെയും കുറിച്ചുള്ള ആഴത്തിലുള്ള ചരിത്ര വിശകലനം.",
      image: "assets/images/book3.svg"
    },
    {
      id: 4,
      title: "Manassinte Vazhikal",
      title_ml: "മനസ്സിന്റെ വഴികൾ",
      author: "Siddharth Menon",
      author_ml: "സിദ്ധാർത്ഥ് മേനോൻ",
      category: "essays",
      category_ml: "ലേഖനങ്ങൾ",
      price: 210,
      rating: 4.2,
      publishDate: "2026-02-05",
      publishDate_ml: "2026 ഫെബ്രുവരി 05",
      desc: "A series of thought-provoking philosophical essays on modern lifestyle, mental health, and mindfulness.",
      desc_ml: "ആധുനിക ജീവിതശൈലി, മാനസികാരോഗ്യം എന്നിവയെക്കുറിച്ചുള്ള ചിന്തോദ്ദീപകമായ ദാർശനിക ലേഖനങ്ങളുടെ സമാഹാരം.",
      image: "assets/images/book4.svg"
    },
    {
      id: 5,
      title: "Kanal Vazhikal",
      title_ml: "കനൽ വഴികൾ",
      author: "K. R. Hari",
      author_ml: "കെ. ആർ. ഹരി",
      category: "fiction",
      category_ml: "നോവൽ",
      price: 350,
      rating: 4.6,
      publishDate: "2026-04-01",
      publishDate_ml: "2026 ഏപ്രിൽ 01",
      desc: "A gripping thriller depicting the struggles and survival of manual laborers in the high-range plantations of Idukki.",
      desc_ml: "ഇടുക്കിയിലെ ഹൈറേഞ്ച് തോട്ടങ്ങളിലെ തൊഴിലാളികളുടെ അതിജീവനത്തിനായുള്ള പോരാട്ടങ്ങളുടെ കഥ പറയുന്ന ഉദ്വേഗഭരിതമായ നോവൽ.",
      image: "assets/images/book5.svg"
    },
    {
      id: 6,
      title: "Akasha Nilayam",
      title_ml: "ആകാശ നിലയം",
      author: "Meera Krishnakumar",
      author_ml: "മീര കൃഷ്ണകുമാർ",
      category: "poetry",
      category_ml: "കവിത",
      price: 180,
      rating: 4.7,
      publishDate: "2026-05-12",
      publishDate_ml: "2026 മെയ് 12",
      desc: "A modern anthology of poetry showcasing the changing face of feminism and urban life in contemporary Kerala.",
      desc_ml: "കേരളത്തിലെ മാറിക്കൊണ്ടിരിക്കുന്ന സ്ത്രീജീവിതങ്ങളെയും നഗരജീവിതങ്ങളെയും അടയാളപ്പെടുത്തുന്ന ആധുനിക കവിതാസമാഹാരം.",
      image: "assets/images/book6.svg"
    },
    {
      id: 7,
      title: "Muzhirisile Marupacha",
      title_ml: "മുസിരിസിലെ മരുപ്പച്ച",
      author: "Dr. Jacob Joseph",
      author_ml: "ഡോ. ജേക്കബ് ജോസഫ്",
      category: "history",
      category_ml: "ചരിത്രം",
      price: 380,
      rating: 4.4,
      publishDate: "2025-08-14",
      publishDate_ml: "2025 ഓഗസ്റ്റ് 14",
      desc: "Unearthing the archaeological secrets of the lost port of Muziris and the ancient civilizations it interacted with.",
      desc_ml: "നശിച്ചുപോയ മുസിരിസ് തുറമുഖത്തിന്റെയും അതിലൂടെ ഉണ്ടായ പുരാതന സംസ്കാരങ്ങളുടെയും പുരാവസ്തു രഹസ്യങ്ങളിലേക്ക് വെളിച്ചം വീശുന്ന കൃതി.",
      image: "assets/images/book7.svg"
    },
    {
      id: 8,
      title: "Chinthakalude Chuvadu",
      title_ml: "ചിന്തകളുടെ ചുവട്",
      author: "P. R. Chandran",
      author_ml: "പി. ആർ. ചന്ദ്രൻ",
      category: "essays",
      category_ml: "ലേഖനങ്ങൾ",
      price: 250,
      rating: 4.1,
      publishDate: "2025-12-05",
      publishDate_ml: "2025 ഡിസംബർ 05",
      desc: "Essays addressing social media influence, the decay of reading habits, and strategies to revive local reading clubs.",
      desc_ml: "സോഷ്യൽ മീഡിയയുടെ സ്വാധീനം, വായനാശീലത്തിന്റെ അപചയം എന്നിവയെക്കുറിച്ചും വായനശാലകളെ പുനരുജ്ജീവിപ്പിക്കേണ്ടതിന്റെ ആവശ്യകതയെക്കുറിച്ചുമുള്ള ലേഖനങ്ങൾ.",
      image: "assets/images/book8.svg"
    }
  ]
};
