use numismatics;
db.dropDatabase();

db.items.insertMany(
  [{
    "name":"Barter",
    "time":"3000 BC",
    "region":"Babylonia",
    "description":"The first banks appeared in Babylonia (present day Iraq) with patrons depositing grain then cattle, agricultural tools and precious metals",
    "image_url":"https://image.slidesharecdn.com/barteradvertising-tradefirst-150903125124-lva1-app6892/95/barter-advertising-trade-first-1-638.jpg?cb=1441284744"
  },
  {
    "name":"Cowry Shells",
    "time":"1300 BC",
    "region":"Asia, Oceana, Africa and some parts of Europe",
    "description":"Starting over three thousand years ago, cowry shells, or copies of the shells, were used as Chinese currency. The Classical Chinese character for “money/currency”, 貝, originated as a pictograph of a cowrie shell. Shell money usually consisted of whole or part sea shells, which were worked into beads or shaped. Cowry Shells were accepted as legal tender in some parts of Africa until the 20th Century.",
    "image_url":"https://climbcarstensz.files.wordpress.com/2013/08/96161.jpg"
  },
  {
    "name":"Lydian Lion Coin",
    "time":"700 BC",
    "region":"Sardis",
    "description":"This was the first time in history when people started to use gold and silver in coins. The first coins were made from electrum, an alloy of silver and gold. For their material and minting value they were recorded and collected by ancient Greeks.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/a/ae/BMC_06.jpg"
  },
  {
    "name":"Ancient Chinese Coins",
    "time":"476 BC",
    "region":"China",
    "description":"First coins were used during ceremonial exchanges, and were shaped like cowry shells. Metal coins introduced later weren't round, but were shaped like spades and knives. They were originally cast into molds, rather than being hammered or cut like European coins.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Square_Shoulder_Spade.jpg/440px-Square_Shoulder_Spade.jpg"
  },
  {
    "name":"Silk Cloth",
    "time":"460 BC",
    "region":"China, Africa, Parts of Europe",
    "description":"From the Far East to Europe and Africa, cloth has been used as medium of exchange and a unit of measurement. During the second millennium, silk cloth passed as money in China, circulating in pieces of a uniform size. The Chinese word pu began as a word referring to “cloth” but came to denote “money” reflecting the importance of silk cloth as money. Silk money survived the advent of metallic coinage in China. In 460 BC the government had three boards for management of gems, gold, and for coins & silk.",
    "image_url":"http://3.imimg.com/data3/HJ/MH/GLADMIN-37790/silk-cloth-500x500.jpg"
  },
  {
    "name":"The First Banknote",
    "time":"618",
    "region":"China",
    "description":"The first banknote is likely to have been developed during the Tang Dynasty, around 618-907, in China. Paper notes were introduced when wealthy merchants struggled to carry all of their copper coins around. Coins were exchanged for receipts, which was the earliest version of a promissory note.",
    "image_url":"https://i.pinimg.com/originals/bb/25/a1/bb25a12055990848b0d64c0a844ea64c.jpg"
  },
  {
    "name":"Tea Bricks",
    "time":"800",
    "region":"China, Mongolia, Siberia, Tibet, Turkmenistan and Russia",
    "description":"In Siberia, Mongolia, Tibet and Chinese-Asian marts, cakes of compressed tea resembling mud-bricks were used as money. This “money” manufactured in Southern China, was made of leaves and stalks of the tea plant, herbs and ox blood. It was then bound together with yak dung. Tea was compressed into bricks of various sizes and stamped with a value which varied depending on quality of the tea. The value increased as the bricks travelled farther from the tea producing country.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Zhuan_cha.jpg/300px-Zhuan_cha.jpg"
  },
  {
    "name":"Gold Gulden",
    "time":"1252",
    "region":"Republic of Florence",
    "description":"Minted in the rich Italian trade city of Florence from gold. Minting was made possible by the large amount of gold the crusaders brought back to Italy. It was a major coin for trading in many countries and was used all the way through the Middle Ages.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Fiorino_1347.jpg/440px-Fiorino_1347.jpg"
  },
  {
    "name":"Tulip Mania",
    "time":"1600",
    "region":"Netherlands",
    "description":"Tulip Mania was a period in The Netherlands when contract prices for some bulbs of the recently introduced tulip reached very high levels and then dramatically collapsed in February 1637. This is generally considered the first recorded speculative bubble.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/d/d8/Tulipomania.jpg"
  },
  {
    "name":"South Sea Bubble ",
    "time":"1720",
    "region":"Great Britain & South America",
    "description":"The South Sea Company was a British company founded in 1711, created to reduce national debt. The company was also granted a monopoly to trade with South America. Company stock quickly rose greatly in value, peaking in 1720 before collapsing to almost its original price; this became known as the South Sea Bubble. In Great Britain, lots of people were ruined by the share collapse, and the national economy reduced as a result. The founders used insider trading, using their knowledge of national debt to make large profits from purchasing debt in advance.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/1/17/William_Hogarth_-_The_South_Sea_Scheme.png"
  },
  {
    "name":"Maria Theresa Thaler",
    "time":"1780",
    "region":"Austria",
    "description":"The Thaler was minted in Günzburg, now Bavaria. It was one of the most long lasting silver trade coins, of any monetary history. The design and fineness added to its great popularity, Maria Theresa was quite famous at the time which helped too.",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/2/2c/MTThaler.png"
  },
  {
    "name":"Highest Value Note - $10,000",
    "time":"1928",
    "region":"USA",
    "description":"The $10,000 note was produced in 1928 and was only briefly in circulation, it was mainly used for large transfers between banks. It is estimated that only around 350 of the notes are still in circulation, but since they are so rare they can be worth ten times their value.",
    "image_url":"http://www.antiquemoney.com/wp-content/uploads/2013/08/Fake-Chase-10000.jpg"
  },
  {
    "name":"Wall Street Crash of 1929",
    "time":"1929",
    "region":"USA",
    "description":"The Wall Street Crash of October 1929 was the most devastating stock market crash in the history of the United States, the crash signalled the beginning of a 12-year Great Depression that affected all Western industrialized countries. The crash followed a speculative boom that had taken hold in the late 1920s",
    "image_url":"https://cdn.britannica.com/700x450/56/71256-004-0692912A.jpg"
  },
  {
    "name":"Polymer Notes",
    "time":"1998",
    "region":"Australia",
    "description":"Polymer notes last 2.5 times longer than paper notes, and are more difficult to counterfeit. More than 25 countries, such as Canada and the UK currently use polymer notes and Australia were the first to use them in 1988. Polymer notes cost twice as much to produce as paper notes.",
    "image_url":"https://www.therightnote.com.au/wp-content/uploads/2014/10/POLYMER-NOTES.jpg"
  },
  {
    "name":"Euro Coins",
    "time":"1999",
    "region":"Europe",
    "description":"Euro Coins have a common reverse, portraying a map of Europe, but each country in the eurozone has its own design on the other side. This means that each coin has a variety of different designs in circulation at once.",
    "image_url":"https://www.fleur-de-coin.com/images/eurocoins/Eurocoins.jpg"
  },
  {
    "name":"Global Financial Crisis",
    "time":"2008",
    "region":"Global",
    "description":"The global financial crisis of 2008 is considered to be the worst financial crisis since the Great Depression, it was started by a mortgage crisis in the United States which caused an international banking crisis. Massive bail-outs of financial institutions and other policies were rolled out to try to prevent a possible collapse of the world financial system. The crisis has been followed by a global economic downturn, the Great Recession. ",
    "image_url":"http://blogs.reuters.com/anatole-kaletsky/files/2014/08/ant-nyse-traders.jpg"
  },
  {
    "name":"Digital Currency",
    "time":"2009",
    "region":"Global",
    "description":"The latest development in money uses cryptography to seek to ensure trust in a theoretically tamper-proof system called a blockchain. These systems have been around since the 1980s, however the first successful and most famous cryptocurrency, bitcoin, was proposed in 2008 by an unknown person under the name of Satoshi Nakamoto. Since bitcoin's inception, thousands of other cryptocurrencies have been introduced.",
    "image_url":"https://248qms3nhmvl15d4ne1i4pxl-wpengine.netdna-ssl.com/wp-content/uploads/2013/12/bitcoin-400x400.jpg"
  },
  {
    "name":" European Debt Crisis",
    "time":"2018",
    "region":"Europe",
    "description":"The European debt crisis has been taking place in the EU since the end of 2009. Several countries (Greece, Portugal, Ireland, Spain and Cyprus) were unable to repay their government debt without the assistance of third parties like other Eurozone countries, the European Central Bank (ECB), or the International Monetary Fund (IMF). The crisis has had negative effects on the economy and labour market, with unemployment rates in Greece and Spain reaching 27%, and was blamed for poor economic growth, impacting all of the entire European Union",
    "image_url":"https://upload.wikimedia.org/wikipedia/commons/c/c3/Long-term_interest_rates_%28eurozone%29.png"
  },
  {
    "name":"Vertical Note",
    "time":"2018",
    "region":"Northern Ireland",
    "description":"Notes are almost always printed on a horizontal view, however, later this year Northern Ireland will become just one of seven countries who will print their notes vertically. China previously printed notes vertically, due to the direction of Chinese writing. Studies have shown that people tend to hold notes vertically when carrying out transactions.",
    "image_url":"https://e3.365dm.com/18/05/1096x616/skynews-ulster-bank-notes-vertical-ireland_4318993.jpg?20180524133334"
  }
  ]

)
