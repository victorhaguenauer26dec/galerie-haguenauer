const artworkTypes = [
  "Aquarelle",
  "Huile",
  "Gravure sur métal",
  "Gravure sur linoléum",
  "Dessin",
  "Dessin au fusain",
  "Dessin au crayon",
  "Acrylique",
];
const artworkThemes = [
  "Lorraine",
  "Provence",
  "Bretagne",
  "Cubisme",
  "Portrait",
  "Nature morte",
];
const artworkPeriods = [
  { label: "1945-1960", start: 1945, end: 1960 },
  { label: "1960-1970", start: 1960, end: 1970 },
  { label: "1970-1980", start: 1970, end: 1980 },
  { label: "1980-1990", start: 1980, end: 1990 },
  { label: "1990-2000", start: 1990, end: 2000 },
  { label: "2000-2010", start: 2000, end: 2011 },
];

const artworkEntries = [
  { file: "20261017_094709.jpg", metadata: { year: 1995, type: "Acrylique", title: "Bassin d\u0027Arcachon", theme: "Bretagne", dimensions: "80x53" } },
  { file: "1.png", metadata: { year: 1982, type: "Acrylique", title: "Coline de Sion en Hiver", theme: "Lorraine", dimensions: "63x40" } },
  { file: "20261017_094442.jpg", metadata: { type: "Gravure sur linoléum", title: "Epreuve d\u0027artiste", theme: "Cubisme", dimensions: "34x24" } },
  { file: "100_0783.jpg", metadata: { year: 1978, type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0784.jpg", metadata: { year: 1978, type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0785.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0786.jpg", metadata: { year: 1996, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0787.jpg", metadata: { year: 2003, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0789.jpg", metadata: { year: 1978, type: "Aquarelle" } },
  { file: "100_0790.jpg", metadata: { theme: "Bretagne" } },
  { file: "100_0791.jpg", metadata: { year: 1995, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0792.jpg", metadata: { year: 2003, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0793.jpg", metadata: { type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0794.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0795.jpg", metadata: { year: 1996, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0796.jpg", metadata: { year: 1995, type: "Aquarelle" } },
  { file: "100_0797.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0798.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0839.jpg", metadata: { year: 1999, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0840.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0841.jpg", metadata: { year: 1993, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0842.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0843.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0846.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0847.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0848.jpg", metadata: { year: 2003, type: "Dessin au fusain", title: "St Paul de M", theme: "Provence" } },
  { file: "100_0849.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0850.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0853.jpg", metadata: { year: 1985, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0854.jpg", metadata: { year: 2000, type: "Acrylique", theme: "Provence" } },
  { file: "100_0855.jpg", metadata: { year: 1982, type: "Acrylique", theme: "Provence" } },
  { file: "100_0856.jpg", metadata: { type: "Acrylique", theme: "Provence" } },
  { file: "100_0857.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0858.jpg", metadata: { year: 1980, type: "Acrylique", theme: "Provence" } },
  { file: "100_0859.jpg", metadata: { year: 1979, type: "Acrylique" } },
  { file: "100_0860.jpg", metadata: { year: 1985, type: "Acrylique", theme: "Provence" } },
  { file: "100_0861.jpg", metadata: { year: 1987, type: "Acrylique", theme: "Provence" } },
  { file: "100_0862.jpg", metadata: { type: "Acrylique" } },
  { file: "100_0863.jpg", metadata: { year: 1982, type: "Huile" } },
  { file: "100_0922.jpg", metadata: { type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0923.jpg", metadata: { year: 1996, type: "Dessin au crayon", theme: "Provence" } },
  { file: "100_0924.jpg", metadata: { year: 2003, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0925.jpg", metadata: { year: 2003, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0926.jpg", metadata: { year: 1983, type: "Dessin au crayon", title: "Eygalières", theme: "Provence" } },
  { file: "100_0927.jpg", metadata: { type: "Aquarelle", title: "Les-Baux-de-Provence", theme: "Provence" } },
  { file: "100_0928.jpg", metadata: { year: 1992, type: "Dessin au crayon", theme: "Provence" } },
  { file: "100_0929.jpg", metadata: { year: 1995, type: "Dessin au crayon", title: "Sainte Sixtine", theme: "Provence" } },
  { file: "100_0930.jpg", metadata: { year: 1972, type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0931.jpg", metadata: { year: 1978, type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0932.jpg", metadata: { type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0933.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0934.jpg", metadata: { year: 1981, type: "Dessin au crayon", title: "Forêt Engloutie - Vosges", theme: "Lorraine" } },
  { file: "100_0935.jpg", metadata: { year: 2001, type: "Huile", theme: "Provence" } },
  { file: "100_0936.jpg", metadata: { year: 1981, type: "Acrylique", theme: "Lorraine" } },
  { file: "100_0938.jpg", metadata: { year: 1997, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0944.jpg", metadata: { year: 1978, type: "Aquarelle" } },
  { file: "100_0945.jpg", metadata: { year: 2000, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0946.jpg", metadata: { year: 1993, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0947.jpg", metadata: { year: 1995, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0948.jpg", metadata: { year: 1996, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0781.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0782.jpg", metadata: { year: 1979, type: "Aquarelle" } },
  { file: "100_0070-straight.jpg", metadata: { year: 2005, type: "Acrylique", theme: "Provence" } },
  { file: "100_0080-straight.jpg", metadata: { year: 1995, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0096-straight.jpg", metadata: { year: 2002, type: "Acrylique", theme: "Provence" } },
  { file: "100_0110-straight.jpg", metadata: { year: 2005, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0111-straight.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0117-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain" } },
  { file: "100_0120-straight.jpg", metadata: { year: 1988, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0121-straight.jpg", metadata: { year: 2000, type: "Dessin au fusain", title: "St Sixte", theme: "Provence" } },
  { file: "100_0123-straight.jpg", metadata: { year: 1999, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0124-straight.jpg", metadata: { year: 2005, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0126-straight.jpg", metadata: { year: 1999, type: "Dessin au fusain", title: "St Benoit", theme: "Provence" } },
  { file: "100_0129-straight.jpg", metadata: { year: 1953, type: "Aquarelle", theme: "Lorraine" } },
  { file: "100_0131-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain" } },
  { file: "100_0134-straight.jpg", metadata: { year: 2000, type: "Dessin au fusain", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0135-straight.jpg", metadata: { year: 2000, type: "Dessin au fusain", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0137-straight.jpg", metadata: { year: 1996, type: "Dessin au fusain", theme: "Lorraine" } },
  { file: "100_0139-straight.jpg", metadata: { year: 1996, type: "Dessin au fusain", theme: "Lorraine" } },
  { file: "100_0140-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain" } },
  { file: "100_0142-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain" } },
  { file: "100_0143-straight.jpg", metadata: { year: 1996, theme: "Lorraine" } },
  { file: "100_0144-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "Coline de Sion en Hiver", theme: "Lorraine" } },
  { file: "100_0145-straight.jpg", metadata: { year: 1988, type: "Aquarelle", theme: "Lorraine" } },
  { file: "100_0150-straight.jpg", metadata: { type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0151-straight.jpg", metadata: { year: 2005, type: "Dessin au fusain", title: "Paysage des Alpilles", theme: "Provence" } },
  { file: "100_0152-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0153-straight.jpg", metadata: { year: 1988, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0154-straight.jpg", metadata: { year: 1992, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0155-straight.jpg", metadata: { year: 1996, type: "Dessin au fusain" } },
  { file: "100_0157-straight.jpg", metadata: { year: 1970, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0161-straight.jpg", metadata: { year: 1991, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0162-straight.jpg", metadata: { year: 1995, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0163-straight.jpg", metadata: { year: 1979, type: "Aquarelle", theme: "Lorraine" } },
  { file: "100_0164-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0165-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain", title: "Eygalières", theme: "Provence" } },
  { file: "100_0166-straight.jpg", metadata: { year: 1995, type: "Dessin au fusain", title: "St Sixte", theme: "Provence" } },
  { file: "100_0167-straight.jpg", metadata: { year: 2000, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0170-straight.jpg", metadata: { year: 2005, type: "Dessin au fusain", title: "Dans les Alpilles", theme: "Provence" } },
  { file: "100_0171-straight.jpg", metadata: { year: 1991, type: "Dessin au fusain", title: "Eygalières", theme: "Provence" } },
  { file: "100_0172-straight.jpg", metadata: { year: 1998, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0173-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0176-straight.jpg", metadata: { year: 1992, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0178-straight.jpg", metadata: { year: 2004, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0183-straight.jpg", metadata: { year: 1991, type: "Aquarelle", title: "Les Baux", theme: "Provence" } },
  { file: "100_0184-straight.jpg", metadata: { type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0189-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", title: "St Sixte", theme: "Provence" } },
  { file: "100_0192-straight.jpg", metadata: { type: "Dessin au fusain", title: "St Sixte Eygalières", theme: "Provence" } },
  { file: "100_0194-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain", title: "Le ventoux", theme: "Provence" } },
  { file: "100_0244-straight.jpg", metadata: { year: 2000, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0245-straight.jpg", metadata: { year: 2004, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0247-straight.jpg", metadata: { type: "Dessin au fusain", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0248-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain" } },
  { file: "100_0249-straight.jpg", metadata: { year: 1991, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0250-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0251-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0252-straight.jpg", metadata: { year: 1991, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0253-straight.jpg", metadata: { year: 1983, type: "Aquarelle", title: "Le Madon à Haroué", theme: "Lorraine" } },
  { file: "100_0254-straight.jpg", metadata: { year: 1985, type: "Aquarelle", title: "Le Madon", theme: "Lorraine" } },
  { file: "100_0269-straight.jpg", metadata: { year: 1991, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0270-straight.jpg", metadata: { year: 2005, type: "Dessin au fusain", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0319-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0322-straight.jpg", metadata: { year: 1989, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0324-straight.jpg", metadata: { year: 1994, type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0329-straight.jpg", metadata: { year: 1969, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0330-straight.jpg", metadata: { year: 1995, type: "Aquarelle", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0331-straight.jpg", metadata: { year: 1975, type: "Aquarelle", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0333-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0340-straight.jpg", metadata: { year: 1971, type: "Aquarelle", title: "Venise" } },
  { file: "100_0342-straight.jpg", metadata: { year: 1994, type: "Aquarelle", title: "Xirocourt", theme: "Lorraine" } },
  { file: "100_0348-straight.jpg", metadata: { type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0350-straight.jpg", metadata: { year: 1988, type: "Aquarelle", title: "Eygalières", theme: "Provence" } },
  { file: "100_0421-straight.jpg", metadata: { year: 1991, type: "Aquarelle", title: "Montmirail", theme: "Provence" } },
  { file: "100_0422-straight.jpg", metadata: { year: 1992, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0431-straight.jpg", metadata: { year: 1988, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0432-straight.jpg", metadata: { type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0436-straight.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0437-straight.jpg", metadata: { year: 1989, type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0438-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", title: "Etretat", theme: "Bretagne" } },
  { file: "100_0440-straight.jpg", metadata: { year: 1989, type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0442-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0443-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0465-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0468-straight.jpg", metadata: { year: 1994, type: "Aquarelle", title: "La maison verte", theme: "Bretagne" } },
  { file: "100_0469-straight.jpg", metadata: { year: 1999, type: "Dessin au fusain", title: "Pompadour", theme: "Provence" } },
  { file: "100_0470-straight.jpg", metadata: { year: 1994, type: "Aquarelle", title: "Boucefranc le Chapus", theme: "Bretagne" } },
  { file: "100_0471-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0472-straight.jpg", metadata: { year: 1994, type: "Aquarelle", title: "La Rance à Dinan", theme: "Provence" } },
  { file: "100_0487-straight.jpg", metadata: { type: "Dessin au fusain", title: "Révolution Française" } },
  { file: "100_0556-straight.jpg", metadata: { year: 1983, type: "Aquarelle", title: "St Remy les Antigues", theme: "Provence" } },
  { file: "100_0563-straight.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0569-straight.jpg", metadata: { type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0573-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "Coline de Sion en Hiver", theme: "Lorraine" } },
  { file: "100_0592-straight.jpg", metadata: { year: 2006, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0614-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0616-straight.jpg", metadata: { year: 2010, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0617-straight.jpg", metadata: { year: 1988, type: "Aquarelle", title: "Les Renous - Eygalières", theme: "Provence" } },
  { file: "100_0618-straight.jpg", metadata: { year: 2006, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0642-straight.jpg", metadata: { year: 1994, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0644-straight.jpg", metadata: { year: 1994, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0680-straight.jpg", metadata: { year: 1991, type: "Aquarelle" } },
  { file: "100_0689-straight.jpg", metadata: { year: 2001, type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0692-straight.jpg", metadata: { year: 2001, type: "Aquarelle", title: "St Sixte", theme: "Provence" } },
  { file: "100_0694-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", title: "St Sixte", theme: "Provence" } },
  { file: "100_0695-straight.jpg", metadata: { year: 1979, type: "Aquarelle", title: "Istambul" } },
  { file: "100_0696-straight.jpg", metadata: { year: 1994, type: "Aquarelle", title: "Marenne" } },
  { file: "100_0697-straight.jpg", metadata: { type: "Aquarelle", theme: "Bretagne" } },
  { file: "100_0698-straight.jpg", metadata: { year: 2001, type: "Aquarelle", theme: "Provence" } },
  { file: "100_0699-straight.jpg", metadata: { year: 1978, type: "Aquarelle" } },
  { file: "100_0702-straight.jpg", metadata: { year: 1995, type: "Dessin au fusain", title: "Eygalières", theme: "Provence" } },
  { file: "100_0703-straight.jpg", metadata: { year: 2003, type: "Aquarelle", title: "Le Mas de La Jolinne", theme: "Provence" } },
  { file: "100_0705-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0710-straight.jpg", metadata: { year: 2003, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0720-straight.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0721-straight.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0722-straight.jpg", metadata: { year: 1988, type: "Aquarelle", title: "Xirocourt", theme: "Lorraine" } },
  { file: "100_0723-straight.jpg", metadata: { year: 1984, type: "Aquarelle", title: "St Nicolas de port", theme: "Lorraine" } },
  { file: "100_0724-straight.jpg", metadata: { year: 1984, type: "Aquarelle", theme: "Lorraine" } },
  { file: "100_0727-straight.jpg", metadata: { year: 1983, type: "Aquarelle", theme: "Lorraine" } },
  { file: "100_0729-straight.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0730-straight.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0731-straight.jpg", metadata: { year: 1985, type: "Aquarelle" } },
  { file: "100_0732-straight.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0734-straight.jpg", metadata: { year: 1992, type: "Aquarelle" } },
  { file: "100_0735-straight.jpg", metadata: { year: 1983, type: "Aquarelle", title: "Bosserville", theme: "Lorraine" } },
  { file: "100_0736-straight.jpg", metadata: { year: 1992, type: "Aquarelle" } },
  { file: "100_0738-straight.jpg", metadata: { year: 1980, type: "Aquarelle" } },
  { file: "100_0739-straight.jpg", metadata: { type: "Aquarelle" } },
  { file: "100_0741-straight.jpg", metadata: { year: 1974, type: "Aquarelle" } },
  { file: "100_0742-straight.jpg", metadata: { year: 1983, type: "Aquarelle" } },
  { file: "100_0743-straight.jpg", metadata: { year: 1954, type: "Aquarelle", title: "Pompey", theme: "Lorraine" } },
  { file: "100_0744-straight.jpg", metadata: { year: 1979, type: "Aquarelle" } },
  { file: "100_0746-straight.jpg", metadata: { year: 1954, type: "Aquarelle", title: "Pompey", theme: "Lorraine" } },
  { file: "100_0747-straight.jpg", metadata: { year: 1952, type: "Aquarelle", title: "Pompey - La moselle", theme: "Lorraine" } },
  { file: "100_0777-straight.jpg", metadata: { year: 1963, type: "Acrylique", theme: "Bretagne" } },
  { file: "100_0864-straight.jpg", metadata: { year: 1996, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0865-straight.jpg", metadata: { year: 2006, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0867-straight.jpg", metadata: { year: 1998, type: "Dessin au fusain", title: "Les Baux", theme: "Provence" } },
  { file: "100_0868-straight.jpg", metadata: { year: 2006, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0869-straight.jpg", metadata: { type: "Dessin au fusain", title: "Eygalières", theme: "Provence" } },
  { file: "100_0870-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0871-straight.jpg", metadata: { type: "Dessin au fusain", theme: "Provence" } },
  { file: "100_0878-straight.jpg", metadata: { year: 2002, type: "Dessin au fusain", title: "Coline de Sion", theme: "Lorraine" } },
  { file: "100_0889-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", title: "Etretat", theme: "Bretagne" } },
  { file: "100_0890-straight.jpg", metadata: { year: 1984, type: "Dessin au crayon", title: "Le Chapus", theme: "Bretagne" } },
  { file: "100_0891-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", title: "Camaret-sur-mer", theme: "Bretagne" } },
  { file: "100_0892-straight.jpg", metadata: { year: 1990, type: "Dessin au crayon", title: "Brest", theme: "Bretagne" } },
  { file: "100_0893-straight.jpg", metadata: { year: 1989, type: "Dessin au crayon", title: "Port-des-barques", theme: "Bretagne" } },
  { file: "100_0894-straight.jpg", metadata: { type: "Dessin au crayon", theme: "Bretagne" } },
  { file: "100_0897-straight.jpg", metadata: { year: 1984, type: "Dessin au crayon", title: "La Tremblade", theme: "Bretagne" } },
  { file: "100_0898-straight.jpg", metadata: { year: 1984, type: "Dessin au crayon", title: "Le Chapus", theme: "Bretagne" } },
  { file: "100_0899-straight.jpg", metadata: { year: 1984, type: "Dessin au crayon", title: "Le Chapus", theme: "Bretagne" } },
  { file: "100_0900-straight.jpg", metadata: { year: 1984, type: "Dessin au crayon", title: "La Tremblade", theme: "Bretagne" } },
  { file: "100_0901-straight.jpg", metadata: { year: 2004, type: "Dessin au fusain", theme: "Bretagne" } },
  { file: "100_0902-straight.jpg", metadata: { year: 1984, type: "Dessin au fusain", title: "La Rochelle" } },
  { file: "100_0903-straight.jpg", metadata: { year: 1990, type: "Dessin au fusain", title: "Regates à Camaret", theme: "Bretagne" } },
  { file: "100_0917-straight.jpg", metadata: { year: 2006, type: "Dessin au fusain", title: "St Sixte", theme: "Provence" } },
  { file: "100_0919-straight.jpg", metadata: { year: 1972, type: "Dessin au crayon", title: "La pallice", theme: "Bretagne" } },
  { file: "100_920-straight.jpg", metadata: { year: 2006, type: "Acrylique", theme: "Bretagne" } },
];
const artworkMetadataByFile = new Map(
  artworkEntries.map(({ file, metadata }) => [file, metadata]),
);
artworkMetadataByFile.set("100_0788.jpg", {
  type: "Photographie",
  title: "Vue de l'atelier",
});
const artistPhotographs = [
  {
    file: "100_0788.JPG",
    metadata: artworkMetadataByFile.get("100_0788.jpg") ?? {},
  },
].map(({ file, metadata }) => ({
  src: `Photographies/${file}`,
  year: metadata.year ?? null,
  description: metadata.title ?? "",
}));

const artworks = artworkEntries
  .filter(({ metadata }) => metadata.type !== "Photographie")
  .map(({ file, metadata }, index) => ({
    src: `images/${file}`,
    title: metadata.title ?? "",
    label: metadata.title || `Œuvre ${String(index + 1).padStart(2, "0")}`,
    year: metadata.year ?? null,
    type: metadata.type ?? "",
    theme: metadata.theme ?? "",
    dimensions: metadata.dimensions ?? "",
  }));

const grid = document.querySelector("#artwork-grid");
const dialog = document.querySelector("#lightbox");
const typeFilter = document.querySelector("#filter-type");
const themeFilter = document.querySelector("#filter-theme");
const periodFilter = document.querySelector("#filter-period");
const artworkCount = document.querySelector("#gallery-count");
const emptyGallery = document.querySelector("#gallery-empty");
const photographyGrid = document.querySelector("#photography-grid");
const photographyCount = document.querySelector("#photography-count");
const emptyPhotography = document.querySelector("#photography-empty");
const siteVisitCounterContainer = document.querySelector(
  "#site-visit-counter-container",
);
const siteVisitCounter = document.querySelector("#site-visit-counter");
const lightboxImage = dialog.querySelector(".lightbox-image");
const lightboxTitle = dialog.querySelector("#lightbox-title");
const lightboxDetails = dialog.querySelector("#lightbox-details");
const expandButton = dialog.querySelector(".lightbox-expand");
let activeArtworkIndex = 0;
let featuredArtworkIndex = -1;
let featuredImageIndex = 0;
let isFeaturedTransitioning = false;
const artworkCards = [];
const featuredImages = [
  ...document.querySelectorAll(".hero-artwork-visual img"),
];

if (
  window.location.protocol !== "file:" &&
  !window.location.hostname.endsWith(".localhost")
) {
  siteVisitCounterContainer.hidden = false;
  siteVisitCounter.src = `${siteVisitCounter.dataset.counterUrl}&visit=${Date.now()}`;
}

function formatArtworkDetails(artwork) {
  return [artwork.year, artwork.type, artwork.theme].filter(Boolean).join(" · ");
}

function populateFilter(select, options) {
  options.forEach((option) => {
    const element = document.createElement("option");
    element.value = option;
    element.textContent = option;
    select.append(element);
  });
}

populateFilter(typeFilter, artworkTypes);
populateFilter(themeFilter, artworkThemes);
populateFilter(
  periodFilter,
  artworkPeriods.map((period) => period.label),
);

function appendYear(parent, year, className) {
  if (!year) {
    return null;
  }

  const element = document.createElement("span");
  element.className = className;
  element.textContent = year;
  parent.append(element);
  return element;
}

function showRandomFeaturedArtwork() {
  if (isFeaturedTransitioning) {
    return;
  }

  let nextIndex = Math.floor(Math.random() * artworks.length);
  while (artworks.length > 1 && nextIndex === featuredArtworkIndex) {
    nextIndex = Math.floor(Math.random() * artworks.length);
  }

  featuredArtworkIndex = nextIndex;
  const artwork = artworks[featuredArtworkIndex];
  const nextImageIndex = 1 - featuredImageIndex;
  const nextImage = featuredImages[nextImageIndex];
  isFeaturedTransitioning = true;

  const showArtwork = () => {
    nextImage.onload = null;
    nextImage.onerror = null;
    nextImage.alt = `${artwork.label} de René HAGUENAUER`;
    nextImage.removeAttribute("aria-hidden");
    nextImage.classList.add("is-visible");

    const currentImage = featuredImages[featuredImageIndex];
    currentImage.classList.remove("is-visible");
    currentImage.alt = "";
    currentImage.setAttribute("aria-hidden", "true");
    featuredImageIndex = nextImageIndex;

    document.querySelector(".hero-caption strong").textContent = artwork.label;
    const featuredYear = document.querySelector(".hero-artwork-year");
    featuredYear.textContent = formatArtworkDetails(artwork);
    featuredYear.hidden = !featuredYear.textContent;
    document.querySelector(".hero-index").textContent =
      `${String(featuredArtworkIndex + 1).padStart(2, "0")} / ${artworks.length}`;
    isFeaturedTransitioning = false;
  };

  nextImage.onload = showArtwork;
  nextImage.onerror = () => {
    nextImage.onload = null;
    nextImage.onerror = null;
    isFeaturedTransitioning = false;
    console.error(`Impossible de charger l’image mise en avant : ${artwork.src}`);
  };
  nextImage.src = artwork.src;
  if (nextImage.complete && nextImage.naturalWidth > 0) {
    showArtwork();
  }
}

showRandomFeaturedArtwork();
window.setInterval(showRandomFeaturedArtwork, 10000);

window.addEventListener("hashchange", showRandomFeaturedArtwork);

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (link.hash === window.location.hash) {
      showRandomFeaturedArtwork();
    }
  });
});

function showArtwork(index) {
  activeArtworkIndex = (index + artworks.length) % artworks.length;
  const artwork = artworks[activeArtworkIndex];
  lightboxImage.src = artwork.src;
  lightboxImage.alt = `${artwork.label} de René HAGUENAUER`;
  lightboxTitle.textContent = artwork.label;
  lightboxDetails.replaceChildren();

  [
    ["Année", artwork.year],
    ["Type d’œuvre", artwork.type],
    ["Titre de l’œuvre", artwork.title],
    ["Thématique", artwork.theme],
    ["Dimensions (cm)", artwork.dimensions],
  ].forEach(([label, value]) => {
    const term = document.createElement("dt");
    term.textContent = label;
    const description = document.createElement("dd");
    description.textContent = value || "Non renseigné";
    lightboxDetails.append(term, description);
  });
}

function filterArtworks() {
  let visibleCount = 0;
  artworkCards.forEach(({ card, artwork }) => {
    const matchesType = !typeFilter.value || artwork.type === typeFilter.value;
    const selectedPeriod = artworkPeriods.find(
      (period) => period.label === periodFilter.value,
    );
    const matchesTheme = !themeFilter.value || artwork.theme === themeFilter.value;
    const matchesPeriod =
      !selectedPeriod ||
      (artwork.year !== null &&
        artwork.year >= selectedPeriod.start &&
        artwork.year < selectedPeriod.end);
    card.hidden = !(matchesType && matchesTheme && matchesPeriod);
    if (!card.hidden) {
      visibleCount += 1;
    }
  });

  artworkCount.textContent =
    `${visibleCount} œuvre${visibleCount === 1 ? "" : "s"} à découvrir`;
  emptyGallery.hidden = visibleCount > 0;
}

artworks.forEach((artwork, index) => {
  const card = document.createElement("figure");
  card.className = "artwork-card";

  const button = document.createElement("button");
  button.className = "artwork-open";
  button.type = "button";
  button.setAttribute("aria-label", `Agrandir ${artwork.label}`);

  const image = document.createElement("img");
  image.src = artwork.src;
  image.alt = `${artwork.label} de René HAGUENAUER`;
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "artwork-caption";

  const title = document.createElement("strong");
  title.textContent = artwork.label;

  const number = document.createElement("span");
  number.textContent = [
    artwork.year,
    artwork.type,
    artwork.theme,
    `${String(index + 1).padStart(2, "0")} / ${artworks.length}`,
  ].filter(Boolean).join(" · ");

  button.append(image);
  caption.append(title, number);
  card.append(button, caption);
  grid.append(card);
  artworkCards.push({ card, artwork });

  button.addEventListener("click", () => {
    showArtwork(index);
    dialog.showModal();
  });
});

artworkCount.textContent = `${artworks.length} œuvres à découvrir`;
typeFilter.addEventListener("change", filterArtworks);
themeFilter.addEventListener("change", filterArtworks);
periodFilter.addEventListener("change", filterArtworks);
document.querySelector("#filter-reset").addEventListener("click", () => {
  typeFilter.value = "";
  themeFilter.value = "";
  periodFilter.value = "";
  filterArtworks();
});

artistPhotographs.forEach((photograph) => {
  const card = document.createElement("figure");
  card.className = "photography-card";

  const image = document.createElement("img");
  image.src = photograph.src;
  image.alt = photograph.description
    ? `${photograph.description}, photographie de René HAGUENAUER`
    : "Photographie de la vie de René HAGUENAUER";
  image.loading = "lazy";
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "artwork-caption";

  const description = document.createElement("strong");
  description.textContent = photograph.description || "Photographie";

  const year = document.createElement("span");
  year.textContent = photograph.year ?? "";

  caption.append(description, year);
  card.append(image, caption);
  photographyGrid.append(card);
});

photographyCount.textContent =
  `${artistPhotographs.length} photographie${artistPhotographs.length === 1 ? "" : "s"}`;
emptyPhotography.hidden = artistPhotographs.length > 0;

dialog.querySelector(".lightbox-close").addEventListener("click", () => {
  dialog.close();
});

expandButton.addEventListener("click", () => {
  const isExpanded = dialog.classList.toggle("lightbox--artwork-large");
  const label = isExpanded ? "Revenir à la fiche" : "Agrandir l’œuvre";
  expandButton.setAttribute("aria-label", label);
  expandButton.title = label;
  expandButton.setAttribute("aria-pressed", String(isExpanded));
  expandButton.textContent = isExpanded ? "⤡" : "⤢";
});

dialog.addEventListener("close", () => {
  dialog.classList.remove("lightbox--artwork-large");
  expandButton.setAttribute("aria-label", "Agrandir l’œuvre");
  expandButton.title = "Agrandir l’œuvre";
  expandButton.setAttribute("aria-pressed", "false");
  expandButton.textContent = "⤢";
});

dialog.querySelector(".lightbox-previous").addEventListener("click", () => {
  showArtwork(activeArtworkIndex - 1);
});

dialog.querySelector(".lightbox-next").addEventListener("click", () => {
  showArtwork(activeArtworkIndex + 1);
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

dialog.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showArtwork(activeArtworkIndex - 1);
  } else if (event.key === "ArrowRight") {
    event.preventDefault();
    showArtwork(activeArtworkIndex + 1);
  }
});
