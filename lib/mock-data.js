// Mock data for development

export const mockKeywords = [
  {
    id: '1',
    text: 'best laptops 2025',
    category: 'product',
    difficulty: 'hard',
    assignedTo: 'john',
    currentRank: '12',
    previousRank: '15',
    dateAdded: '2024-03-15'
  },
  {
    id: '2',
    text: 'smartphone comparison',
    category: 'product',
    difficulty: 'medium',
    assignedTo: 'sarah',
    currentRank: '8',
    previousRank: '10',
    dateAdded: '2024-02-20'
  },
  {
    id: '3',
    text: 'wireless earbuds review',
    category: 'product',
    difficulty: 'medium',
    assignedTo: 'john',
    currentRank: '5',
    previousRank: '7',
    dateAdded: '2024-01-10'
  },
  {
    id: '4',
    text: 'tech brand customer service',
    category: 'brand',
    difficulty: 'easy',
    assignedTo: 'mike',
    currentRank: '3',
    previousRank: '5',
    dateAdded: '2024-04-02'
  },
  {
    id: '5',
    text: 'tech industry trends',
    category: 'industry',
    difficulty: 'hard',
    assignedTo: 'sarah',
    currentRank: '15',
    previousRank: '18',
    dateAdded: '2024-02-28'
  },
  {
    id: '6',
    text: 'electronics store near me',
    category: 'location',
    difficulty: 'easy',
    assignedTo: 'mike',
    currentRank: '4',
    previousRank: '4',
    dateAdded: '2024-03-10'
  },
  {
    id: '7',
    text: 'gaming laptop deals',
    category: 'product',
    difficulty: 'medium',
    assignedTo: 'john',
    currentRank: '9',
    previousRank: '12',
    dateAdded: '2024-01-25'
  }
];

export const mockRankings = [
  // Current month (assume current month is 5 - June)
  { keywordId: '1', month: 5, week: 0, rank: '15' },
  { keywordId: '1', month: 5, week: 1, rank: '14' },
  { keywordId: '1', month: 5, week: 2, rank: '13' },
  { keywordId: '1', month: 5, week: 3, rank: '12' },

  { keywordId: '2', month: 5, week: 0, rank: '10' },
  { keywordId: '2', month: 5, week: 1, rank: '9' },
  { keywordId: '2', month: 5, week: 2, rank: '8' },
  { keywordId: '2', month: 5, week: 3, rank: '8' },

  { keywordId: '3', month: 5, week: 0, rank: '7' },
  { keywordId: '3', month: 5, week: 1, rank: '6' },
  { keywordId: '3', month: 5, week: 2, rank: '6' },
  { keywordId: '3', month: 5, week: 3, rank: '5' },

  { keywordId: '4', month: 5, week: 0, rank: '5' },
  { keywordId: '4', month: 5, week: 1, rank: '4' },
  { keywordId: '4', month: 5, week: 2, rank: '3' },
  { keywordId: '4', month: 5, week: 3, rank: '3' },

  { keywordId: '5', month: 5, week: 0, rank: '18' },
  { keywordId: '5', month: 5, week: 1, rank: '17' },
  { keywordId: '5', month: 5, week: 2, rank: '16' },
  { keywordId: '5', month: 5, week: 3, rank: '15' },

  { keywordId: '6', month: 5, week: 0, rank: '4' },
  { keywordId: '6', month: 5, week: 1, rank: '4' },
  { keywordId: '6', month: 5, week: 2, rank: '4' },
  { keywordId: '6', month: 5, week: 3, rank: '4' },

  { keywordId: '7', month: 5, week: 0, rank: '12' },
  { keywordId: '7', month: 5, week: 1, rank: '11' },
  { keywordId: '7', month: 5, week: 2, rank: '10' },
  { keywordId: '7', month: 5, week: 3, rank: '9' },

  // Previous month (4 - May)
  { keywordId: '1', month: 4, week: 0, rank: '18' },
  { keywordId: '1', month: 4, week: 1, rank: '17' },
  { keywordId: '1', month: 4, week: 2, rank: '16' },
  { keywordId: '1', month: 4, week: 3, rank: '15' },

  { keywordId: '2', month: 4, week: 0, rank: '13' },
  { keywordId: '2', month: 4, week: 1, rank: '12' },
  { keywordId: '2', month: 4, week: 2, rank: '11' },
  { keywordId: '2', month: 4, week: 3, rank: '10' },

  { keywordId: '3', month: 4, week: 0, rank: '10' },
  { keywordId: '3', month: 4, week: 1, rank: '9' },
  { keywordId: '3', month: 4, week: 2, rank: '8' },
  { keywordId: '3', month: 4, week: 3, rank: '7' },

  { keywordId: '4', month: 4, week: 0, rank: '8' },
  { keywordId: '4', month: 4, week: 1, rank: '7' },
  { keywordId: '4', month: 4, week: 2, rank: '6' },
  { keywordId: '4', month: 4, week: 3, rank: '5' },

  { keywordId: '5', month: 4, week: 0, rank: '22' },
  { keywordId: '5', month: 4, week: 1, rank: '21' },
  { keywordId: '5', month: 4, week: 2, rank: '20' },
  { keywordId: '5', month: 4, week: 3, rank: '18' },

  { keywordId: '6', month: 4, week: 0, rank: '7' },
  { keywordId: '6', month: 4, week: 1, rank: '6' },
  { keywordId: '6', month: 4, week: 2, rank: '5' },
  { keywordId: '6', month: 4, week: 3, rank: '4' },

  { keywordId: '7', month: 4, week: 0, rank: '15' },
  { keywordId: '7', month: 4, week: 1, rank: '14' },
  { keywordId: '7', month: 4, week: 2, rank: '13' },
  { keywordId: '7', month: 4, week: 3, rank: '12' },
];

export const goalsData = [
  {
    id: '1',
    text: 'Site Audit',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '2',
    text: 'Backlink analysis',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '3',
    text: 'Console errors resolution',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '4',
    text: 'On Page Blogs',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '5',
    text: 'Business Listing',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '6',
    text: 'Profile Listing',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '7',
    text: 'Social Bookmarking',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '8',
    text: 'WEB 2.0',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '9',
    text: 'Image submission',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '10',
    text: 'Infographic Creation',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '11',
    text: 'Infographic Submission',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '12',
    text: 'PDF/PPT Submission',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '13',
    text: 'Guest posting',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '14',
    text: 'Quora post',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '15',
    text: 'External Blog Submission',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '16',
    text: 'Article Submission',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '17',
    text: 'Competitors Backlinks',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  },
  {
    id: '18',
    text: 'Number of backlinks',
    count: '0',
    Achieved: '0',
    monthlyReport: '-'
  }
];

export const OffPageFactorsData = [
  {
    id: 1, Tasks: 'Crawlability', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 2, Tasks: 'Page Indexing', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 3, Tasks: 'Meta Title', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 4, Tasks: 'Meta Description', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 5, Tasks: 'H1', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 6, Tasks: 'XML Sitemap', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 7, Tasks: 'Slug Url', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 8, Tasks: 'Check URL Structure', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 9, Tasks: 'Canonical', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 10, Tasks: 'SSL Certificate', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 11, Tasks: 'GTM Code', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 12, Tasks: 'GSC Setup', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 13, Tasks: 'Hreflang Tags', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 14, Tasks: 'Define Preferred URL (www/non-www/http/https)', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 15, Tasks: 'Schema Markup', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 16, Tasks: 'Pagination', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 17, Tasks: 'Mobile-Friendly Navigation', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 18, Tasks: 'Check Breadcrumbs & Navigation', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 19, Tasks: 'Open Graph Tags', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 20, Tasks: 'Favicon', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 21, Tasks: 'Website Functionality Test', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 22, Tasks: 'Mobile Speed', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 23, Tasks: 'Desktop Speed', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 24, Tasks: 'Social Media Integration', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 25, Tasks: 'Robots.txt', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 26, Tasks: 'No Index and No follow tag', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  },
  {
    id: 27, Tasks: 'Image Optimization', Status: 'Done', Note: '-',
    dateAdded: '2024-03-15'
  }
];


export const BacklinksData = [
  {
    Activity: 'Site Audit',
    Backlinks: '10',
    Keyword: 'technical seo audit',
    URL: 'https://example.com/site-audit',
    Title: 'Complete Site Audit',
    Description: 'Analyzed site structure, speed, and indexability.'
  },
  {
    Activity: 'Backlink analysis',
    Backlinks: '5',
    Keyword: 'backlink checker',
    URL: 'https://example.com/backlink-analysis',
    Title: 'Competitor Backlink Analysis',
    Description: 'Reviewed top competitors and extracted backlink opportunities.'
  },
  {
    Activity: 'Console errors resolution',
    Backlinks: '0',
    Keyword: 'google console errors',
    URL: 'https://example.com/console-errors',
    Title: 'Fix Console Errors',
    Description: 'Resolved coverage and mobile usability issues.'
  },
  {
    Activity: 'On Page Blogs',
    Backlinks: '3',
    Keyword: 'seo tips 2024',
    URL: 'https://example.com/blog/seo-tips',
    Title: 'SEO Best Practices',
    Description: 'Published blog covering current on-page SEO tactics.'
  },
  {
    Activity: 'Business Listing',
    Backlinks: '7',
    Keyword: 'local seo listing',
    URL: 'https://example.com/business-listing',
    Title: 'Local Listings Updated',
    Description: 'Submitted site to 10+ local directories.'
  },
  {
    Activity: 'Profile Listing',
    Backlinks: '4',
    Keyword: 'profile backlinks',
    URL: 'https://example.com/profile-listing',
    Title: 'Profile Creation',
    Description: 'Created high-DA profile links for authority.'
  },
  {
    Activity: 'Social Bookmarking',
    Backlinks: '12',
    Keyword: 'bookmarking sites',
    URL: 'https://example.com/bookmarking',
    Title: 'Social Bookmarks Created',
    Description: 'Added URLs to top social bookmarking sites.'
  },
  {
    Activity: 'WEB 2.0',
    Backlinks: '8',
    Keyword: 'web 2.0 backlinks',
    URL: 'https://example.com/web20',
    Title: 'Web 2.0 Blogs',
    Description: 'Created and posted content on Web 2.0 platforms.'
  },
  {
    Activity: 'Image submission',
    Backlinks: '6',
    Keyword: 'image sharing seo',
    URL: 'https://example.com/image-submission',
    Title: 'Image Submission',
    Description: 'Submitted branded images to image-sharing platforms.'
  },
  {
    Activity: 'Infographic Creation',
    Backlinks: '2',
    Keyword: 'seo infographic',
    URL: 'https://example.com/infographic',
    Title: 'SEO Strategy Infographic',
    Description: 'Designed and published infographics on SEO.'
  },
  {
    Activity: 'Infographic Submission',
    Backlinks: '4',
    Keyword: 'infographic submission sites',
    URL: 'https://example.com/infographic-submission',
    Title: 'Infographic Submitted',
    Description: 'Submitted infographic to top directories.'
  },
  {
    Activity: 'PDF/PPT Submission',
    Backlinks: '3',
    Keyword: 'presentation seo',
    URL: 'https://example.com/ppt-submission',
    Title: 'PPT SEO Guide',
    Description: 'Created and shared PDF & PPT for content marketing.'
  },
  {
    Activity: 'Guest posting',
    Backlinks: '9',
    Keyword: 'guest blog opportunities',
    URL: 'https://example.com/guest-posts',
    Title: 'Guest Blog Published',
    Description: 'Submitted SEO articles on high-DA blogs.'
  },
  {
    Activity: 'Quora post',
    Backlinks: '1',
    Keyword: 'seo on quora',
    URL: 'https://quora.com/seo-question',
    Title: 'Quora Answer on SEO',
    Description: 'Posted answers with backlinks to site.'
  },
  {
    Activity: 'External Blog Submission',
    Backlinks: '5',
    Keyword: 'external blog post',
    URL: 'https://example.com/external-blog',
    Title: 'Blog Published Externally',
    Description: 'Posted article on industry-related blog.'
  },
  {
    Activity: 'Article Submission',
    Backlinks: '6',
    Keyword: 'seo article',
    URL: 'https://example.com/articles',
    Title: 'Article Submitted',
    Description: 'Shared article on article submission websites.'
  },
  {
    Activity: 'Competitors Backlinks',
    Backlinks: '15',
    Keyword: 'analyze competitor links',
    URL: 'https://example.com/competitor-backlinks',
    Title: 'Backlink Gap Analysis',
    Description: 'Identified and replicated competitor backlinks.'
  },
  {
    Activity: 'Number of backlinks',
    Backlinks: '75',
    Keyword: 'total backlinks',
    URL: 'https://example.com/backlinks-total',
    Title: 'Backlinks Summary',
    Description: 'Summarized all acquired backlinks this month.'
  }
];


export const GlobalBacklinksData = [
  { Backlink: 'kyourc.com' },
  { Backlink: 'atavi.com' },
  { Backlink: 'posteezy.com' },
  { Backlink: 'social.kubo.chat' },
  { Backlink: 'oodare.com' },
  { Backlink: 'snupto.com' },
  { Backlink: 'justpaste.it' },
  { Backlink: '500px.com' },
  { Backlink: 'voyage-to.me' },
  { Backlink: 'posta2z.com' },
  { Backlink: 'mediafire.com' },
  { Backlink: 'brisbanehousecleaners.mystrikingly.com' },
  { Backlink: 'brisbanehousecleaners.blogspot.com' },
  { Backlink: 'medium.com' },
  { Backlink: 'brisbanehousecleaners.wistia.com' },
  { Backlink: 'diigo.com' },
  { Backlink: 'qr.ae' },
  { Backlink: 'slideshare.net' },
  { Backlink: 'jmp.sh' },
  { Backlink: 'files.fm' },
  { Backlink: 'dochub.com' },
  { Backlink: '4shared.com' },
  { Backlink: '1001firms.com' },
  { Backlink: 'linktr.ee' },
  { Backlink: 'tumblr.com' },
  { Backlink: 'kuula.co' },
  { Backlink: 'ko-fi.com' },
  { Backlink: 'edocr.com' },
  { Backlink: 'patreon.com' },
  { Backlink: 'whimsical.com' },
  { Backlink: 'whizolosophy.com' },
  { Backlink: 'sites.google.com' },
  { Backlink: 'brisbanehousec.wixsite.com' },
  { Backlink: 'fewpal.com' },
  { Backlink: 'socialbookmarkhub.com' },
  { Backlink: 'socialsbookmark.com' },
  { Backlink: 'bondhuplus.com' },
  { Backlink: 'chumsay.com' },
  { Backlink: 'start.me' },
  { Backlink: 'hitechdigitalservices.com' },
  { Backlink: 'jointcorners.com' },
  { Backlink: 'socialbookmarkmedia.com' },
  { Backlink: 'brisbanehousecleaners.stck.me' },
  { Backlink: 'penzu.com' },
  { Backlink: 'create.piktochart.com' },
  { Backlink: 'socialsocial.social' },
  { Backlink: 'brisbanehousecleaners.bravesites.com' },
  { Backlink: 'mymeetbook.com' },
  { Backlink: 'sutori.com' },
  { Backlink: 'cleaningtips77.livejournal.com' },
  { Backlink: 'au.pinterest.com' },
  { Backlink: 'behance.net' },
  { Backlink: 'indibloghub.com' },
  { Backlink: 'slideshow.net' }, // typo likely – confirm this
  { Backlink: 'pearltrees.com' },
  { Backlink: 'pinpdf.com' },
  { Backlink: 'print2flash.com' },
  { Backlink: 'organesh.com' },
  { Backlink: 'graphicmama.com' },
  { Backlink: 'adproceed.com' },
  { Backlink: 'buylocal.smallbusinessaustralia.org' },
  { Backlink: 'listmyposting.com' },
  { Backlink: 'wagpod.com' },
  { Backlink: 'timessquarereporter.com' },
  { Backlink: 'buzzbii.com' },
  { Backlink: 'socialmediastore.net' },
  { Backlink: 'gorillasocialwork.com' },
  { Backlink: 'socialrus.com' },
  { Backlink: 'logcla.com' },
  { Backlink: 'lowcountryminoritybiz.com' },
  { Backlink: 'disqus.com' },
  { Backlink: 'myvipon.com' },
  { Backlink: 'brisbanehousecleaners.wordpress.com' },
  { Backlink: 'about.me' },
  { Backlink: 'wattpad.com' },
  { Backlink: 'owntweet.com' },
  { Backlink: 'allmylinks.com' },
  { Backlink: 'woll2woll.com' },
  { Backlink: 'businesssoftwarehelp.com' },
  { Backlink: 'enests.co' },
  { Backlink: 'tuplaza.com' },
  { Backlink: 'azfreight.com' },
  { Backlink: 'businesslistingplus.com' },
  { Backlink: 'workapp.world' },
  { Backlink: 'justdirectory.org' },
  { Backlink: 'classdirectory.org' },
  { Backlink: 'famenest.com' },
  { Backlink: 'talkin.co.ke' },
  { Backlink: 'khushsh1512.medium.com' },
  { Backlink: 'khushdigital.tumblr.com' },
  { Backlink: 'facebook.com' },
  { Backlink: 'linkedin.com' },
  { Backlink: 'x.com' },
  { Backlink: 'khushdigtal.blogspot.com' },
  { Backlink: 'brisbanehousecleaners.net.au' },
]

export const backlinkList = [
  {
    title: "Top Cleaning Tips for a Spotless Home",
    link: "https://justpaste.it/cleaning-tips-spotless-home",
    liveLink: "https://justpaste.it/view/abc123",
    type: "Article",
  },
  {
    title: "Why You Should Hire Professional Cleaners",
    link: "https://medium.com/@cleanspacepro/why-hire-professionals",
    liveLink: "https://medium.com/@cleanspacepro/xyz456",
    type: "Blog",
  },
  {
    title: "Expert Home Cleaning - Tips and Tricks",
    link: "https://500px.com/photo/cleaning-tips-tricks",
    liveLink: "https://500px.com/photo/123456789",
    type: "Photo",
  },
  {
    title: "Eco-Friendly Cleaning Hacks",
    link: "https://greenhomeclean.blogspot.com/2025/04/eco-cleaning.html",
    liveLink: "https://greenhomeclean.blogspot.com/live123",
    type: "Blogspot",
  },
  {
    title: "Customer Reviews for Clean & Fresh Co.",
    link: "https://slideshare.net/cleanandfresh/reviews",
    liveLink: "https://slideshare.net/slideshow/987654321",
    type: "Slides",
  },
  {
    title: "The Ultimate Floor Cleaning Guide",
    link: "https://www.edocr.com/v/floor-cleaning-guide",
    liveLink: "https://www.edocr.com/view/654321",
    type: "PDF",
  },
  {
    title: "Professional Cleaning Guide PDF",
    link: "https://mediafire.com/file/cleaning-guide",
    liveLink: "https://mediafire.com/view/cleaning123",
    type: "Document",
  },
  {
    title: "Organize Your Home for Easier Cleaning",
    link: "https://wattpad.com/story/home-organization-guide",
    liveLink: "https://wattpad.com/user/tidyspace",
    type: "Story",
  },
  {
    title: "House Cleaning Checklist Infographic",
    link: "https://piktochart.com/output/cleaning-checklist",
    liveLink: "https://piktochart.com/infographic/homechecklist456",
    type: "Infographic",
  },
  {
    title: "Easy Methods to Clean Kitchen Tiles",
    link: "https://ko-fi.com/i/kitchen-cleaning-guide",
    liveLink: "https://ko-fi.com/i/kitchen789",
    type: "Guide",
  }
];



export const projectDetails = {
  businessInfo: {
    businessName: "Tech Solutions Inc",
    representativeName: "John Smith",
    websiteUrl: "https://techsolutions.com",
    logoUrl: "https://example.com/logo.png",
    businessEmail: "contact@techsolutions.com",
    address: "123 Tech Street",
    city: "San Francisco",
    state: "California",
    country: "United States",
    zipCode: "94105",
    phoneNumber: "+1 (555) 123-4567",
    establishmentYear: "2015",
    description: "Leading provider of innovative tech solutions",
    tagline: "Innovation meets excellence",
    abnNumber: "12345678901",
  },
  submissionInfo: {
    email: "submissions@techsolutions.com",
    companyName: "Tech Solutions International",
    fullName: "John Robert Smith",
    userName: "techsolutions_admin",
    backlinksPassword: "********",
    backlinksEmail: "backlinks@techsolutions.com",
    emailPasswordNew: "********",
    emailPasswordOld: "********",
  },
  socialMedia: {
    facebook: "https://facebook.com/techsolutions",
    instagram: "https://instagram.com/techsolutions",
    youtube: "https://youtube.com/techsolutions",
    twitter: "https://twitter.com/techsolutions",
    x: "https://x.com/techsolutions",
    linkedin: "https://linkedin.com/company/techsolutions",
    discord: "https://discord.gg/techsolutions",
  },
  businessHours: {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  },
  additionalInfo: {
    notes: "Special holiday hours may apply",
    competitors: [
      "CompetitorA - competitora.com",
      "CompetitorB - competitorb.com",
      "CompetitorC - competitorc.com"
    ]
  }
};

export const projects = [
  {
    id: '1',
    name: 'E-commerce Website',
    description: 'SEO optimization for an online retail store',
    status: 'In Progress',
    progress: 65,
    created: '2023-12-05',
    dueDate: '2024-06-15',
  },
  {
    id: '2',
    name: 'Tech Blog',
    description: 'Content and keyword strategy for a technology blog',
    status: 'Active',
    progress: 42,
    created: '2024-01-15',
    dueDate: '2024-07-30',
  },
  {
    id: '3',
    name: 'Local Business',
    description: 'Local SEO for a restaurant chain',
    status: 'Planning',
    progress: 12,
    created: '2024-03-10',
    dueDate: '2024-09-20',
  },
  {
    id: '4',
    name: 'SaaS Product',
    description: 'SEO strategy for a software as a service platform',
    status: 'Active',
    progress: 78,
    created: '2023-11-08',
    dueDate: '2024-05-30',
  },
];

export const internalBlogsData = [
  {
    topic: "Effective Carpet Cleaning Techniques for Pet Owners",
    keyword: "Carpet Cleaning",
    title: "Carpet Cleaning",
    lsiKeyword: "domestic cleaning brisbane home cleaning, domestic cleaning, cleaning experts",
    link: "Internal blog-BHC-4-3-2025",
    quillbot: "72%",
    zeroGpt: "78%"
  },
  {
    topic: "The Importance of Window Cleaning in Home Maintenance",
    keyword: "Window Cleaning",
    title: "Carpet Cleaning",
    lsiKeyword: "house cleaning brisbane",
    link: "Internal Blog-BHC-5-3-2025",
    quillbot: "52%",
    zeroGpt: "88%"
  },
  {
    topic: "Time-Saving Cleaning Tips for Busy Professionals",
    keyword: "professional house cleaning brisbane",
    title: "Carpet Cleaning",
    lsiKeyword: "local cleaning experts, community cleaners, nearby cleaning services",
    link: "Internal Blog-BHC-7-3-2025",
    quillbot: "93%",
    zeroGpt: "33%"
  },
  {
    topic: "Essential Cleaning Tools Every Home Should Have",
    keyword: "cleaner brisbane",
    title: "Carpet Cleaning",
    lsiKeyword: "routine cleaning, scheduled cleaning, consistent upkeep",
    link: "Internal Blog-BHC-10-3-2025",
    quillbot: "0%",
    zeroGpt: "10%"
  },
  {
    topic: "6 Benefits of Regular house Cleaning Services",
    keyword: "regular home cleaning brisbane",
    title: "Carpet Cleaning",
    lsiKeyword: "annual cleaning, deep cleaning advantages, thorough home cleaning",
    link: "Internal Blog-BHC-10-3-2025",
    quillbot: "0%",
    zeroGpt: "8%"
  }
];
