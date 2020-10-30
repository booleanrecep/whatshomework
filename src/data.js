import { assets } from "./images/svg/ecology/index";
import TrDate from "tr-date";
import { animations } from "./images/animations/lottie/index";

const tr = new TrDate();
const atasozleri = [
  {
    soz: "Acele işin sonu pişmanlık.",
    anlam: "Bir işte çok acele edildiği zaman istenilen sonuç ortaya çıkmaz.",
  },
  {
    soz: "Ağaç düşse de yakınına yaslanır.",
    anlam: "Zor ve sıkıntılı zamanlarda kişilere yakınları destek olur.",
  },
  {
    soz: "İşleyen demir ışıldar.",
    anlam: "Çalışmak, insandaki isteksizliği bitirip onu canlı, etkili kılar.",
  },
  {
    soz: "Keçiyi yardan uçuran bir tutam ottur.",
    anlam:
      "Açgözlü, gözü doymak bilmeyen, hırslı kişiler, küçük bir çıkar için bütün varlıklarını tehlikeye atar.",
  },
  {
    soz: "Kork Allah’tan korkmayandan.",
    anlam:
      "Bir kişi Allah’tan korkmuyorsa her türlü kötülüğü yapabilir. Böyle kişilerden korkmak gerekir.",
  },
];
const objects = {
  branchs:[
    {
      branchID:"",
      name:"",
      teacher:"",
      homeworks:[],
      lessons:[]
    }

  ],
  schools: [
    {
      schoolID: "",
      image: "",
      name: "",
      teachers: [],
      students: [],
      classrooms: [],
    },
  ],
  teachers: [
    {
      teacherID: "",
      name: "",
      school: "",
      photo: "",
      branch: "",
      homeworks: [],
      classrooms: [],
    },
  ],

  classrooms: [
    {
      name: "",
      image: "",
      classroomID: "",
      teachers: [],
      students: [],
      homeworks: [],
    },
  ],
  homeworks: [
    {
      homeworkID: "",
      teacherID: "",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "",
      task: "",
      image: "",
      imageTitle: "",
    },
  ],
};
const dummyData = {
  branchs:[
    {
      name:"Turkish Literature",
      school:"FT",
      branchID:"branch01",
      teacher:"Recep",
      homeworks:["homework01","homework03"],
      lessons:[]
    },
    {
      name:"English Literature",
      school:"FT",
      branchID:"branch02",
      teacher:"Jhon",
      homeworks:["homework02","homework4"],
      lessons:[]
    },
    {
      name:"Science",
      school:"FT",
      branchID:"branch03",
      teacher:"Marco",
      homeworks:["homework05","homework07"],
      lessons:[]
    },
    
    {
      name:"Technology",
      school:"FT",
      branchID:"branch04",
      teacher:"Marcello",
      homeworks:["homework06","homewrok08"],
      lessons:[]
    }


  ],
  schools: [
    {
      schoolID: "school01",
      image: "",
      name: "FT",
      teachers: ["theacher01","teacher02","teacher03","teacher04"],
      students: [],
      branches:["branches01","branches02","branches03","branches04"],
      classrooms: ["classroom01","classroom02"],
      homeworks: ["homework01","homework02","homework03","homework04","homework05","homework06","homework07","homework08"],
    },
    {
      schoolID: "school02",
      image: "",
      name: "DNE",
      teachers: ["theacher05","teacher06","teacher07","teacher08"],
      branches:["branches01","branches02","branches03","branches04"],
      students: [],
      classrooms: ["classroom03","classroom04"],
      homeworks: ["homework01","homework02","homework03","homework04","homework05","homework06","homework07","homework08"],
    }
  ],
  teachers: [
    {
      teacherID: "teacher01",
      name: "Recep",
      school: "FT",
      photo: "",
      branch: "Turkish Literature",
      homeworks: ["homework01","homework03"],
      classrooms: ["classroom01","classroom02","classroom03","classroom04"],
    },
    {
      teacherID: "teacher02",
      name: "Jhon",
      school: "FT",
      photo: "",
      branch: "English Literature",
      homeworks: ["homework02","homework04"],
      classrooms: ["classroom01","classroom02","classroom03","classroom04"],
    },
    {
      teacherID: "teacher03",
      name: "Marco",
      school: "FT",
      photo: "",
      branch: "Science",
      homeworks: ["homewrok05","homework07"],
      classrooms: ["classroom01","classroom02","classroom03","classroom04"],
    },
    {
      teacherID: "teacher04",
      name: "Marcello",
      school: "FT",
      photo: "",
      branch: "Technology",
      homeworks: ["homework06","homework08"],
      classrooms: ["classroom01","classroom02","classroom03","classroom04"],
    },
    /////
    {
      teacherID: "teacher05",
      name: "Hasan",
      school: "DNE",
      photo: "",
      branch: "Turkish Literature",
      homeworks: ["homework01","homework03"],
      classrooms: ["classroom05","classroom06","classroom07","classroom08"],
    },
    {
      teacherID: "teacher06",
      name: "Hüseyin",
      school: "DNE",
      photo: "",
      branch: "English Literature",
      homeworks: ["homework02","homework04"],
      classrooms: ["classroom05","classroom06","classroom07","classroom08"],
    },
    {
      teacherID: "teacher07",
      name: "Fatma",
      school: "DNE",
      photo: "",
      branch: "Science",
      homeworks: ["homewrok05","homework07"],
      classrooms: ["classroom05","classroom06","classroom07","classroom08"],
    },
    {
      teacherID: "teacher08",
      name: "Şaziye",
      school: "DNE",
      photo: "",
      branch: "Technology",
      homeworks: ["homework06","homework08"],
      classrooms: ["classroom05","classroom06","classroom07","classroom08"],
    },
  ],

  classrooms: [
    {
      school:"FT",
      name: "5-A",
      image: "",
      classroomID: "classroom01",
      teachers: ["teacher01","teacher02","teacher03","teacher04"],
      students: [],
      homeworks: ["homework01"],
    },
    {
      school:"FT",
      name: "5-B",
      image: "",
      classroomID: "classroom02",
      teachers: ["teacher01","teacher02","teacher03","teacher04"],
      students: [],
      homeworks: ["homework02"],
    },
    {
      school:"FT",
      name: "6-B",
      image: "",
      classroomID: "classroom03",
      teachers: ["teacher01","teacher02","teacher03","teacher04"],
      students: [],
      homeworks: ["homework03"],
    },
    {
      school:"FT",
      name: "8-A",
      image: "",
      classroomID: "classroom04",
      teachers: ["teacher01","teacher02","teacher03","teacher04"],
      students: [],
      homeworks: ["homework04"],
    },
    {
      school:"DNE",
      name: "7-A",
      image: "",
      classroomID: "classroom05",
      teachers: ["teacher05","teacher06","teacher07","teacher08"],
      students: [],
      homeworks: ["homework05"],
    },
    {
      school:"DNE",
      name: "7-B",
      image: "",
      classroomID: "classroom06",
      teachers: ["teacher05","teacher06","teacher07","teacher08"],
      students: [],
      homeworks: ["homework06"],
    },
    {
      school:"DNE",
      name: "7-C",
      image: "",
      classroomID: "classroom07",
      teachers: ["teacher05","teacher06","teacher07","teacher08"],
      students: [],
      homeworks: ["homework07"],
    },
    {
      school:"DNE",
      name: "7-D",
      image: "",
      classroomID: "classroom08",
      teachers: ["teacher05","teacher06","teacher07","teacher08"],
      students: [],
      homeworks: ["homework08"],
    },
  ],
  homeworks: [
    {
      school:"FT",
      classroom:"5-A",
      homeworkID: "homework01",
      teacher: "Recep",
      branch:"Turkish Literature",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "Memleket İsterim",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"FT",
      classroom:"6-B",
      homeworkID: "homework03",
      teacher: "Recep",
      branch:"Turkish Literature",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "Peirli El",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"FT",
      classroom:"5-B",
      homeworkID: "homework02",
      teacher: "Jhon",
      branch:"English Literature",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "How to be ok?",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"FT",
      classroom:"8-A",
      homeworkID: "homework04",
      teacher: "Jhon",
      branch:"English Literature",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "What is the time?",
      task: "",
      image: "",
      imageTitle: "",
    },
    
    {
      school:"DNE",
      classroom:"7-A",
      homeworkID: "homework05",
      teacher: "Marco",
      branch:"Science",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "Discover the earth!",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"DNE",
      classroom:"7-C",
      homeworkID: "homework07",
      teacher: "Marco",
      branch:"Science",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "Explore the fire!",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"DNE",
      classroom:"7-B",
      homeworkID: "homework06",
      teacher: "Marcello",
      branch:"Technology",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "How to make technology?",
      task: "",
      image: "",
      imageTitle: "",
    },
    {
      school:"DNE",
      classroom:"7-D",
      homeworkID: "homework08",
      teacher: "Marcello",
      branch:"Technology",
      start: `${tr.getFullDate(".")}`,
      end: `${tr.getFullDate(".")}`,
      topic: "What is coding?",
      task: "",
      image: "",
      imageTitle: "",
    },
  ],
};
const schoolsData = {
  schools: [
    {
      schoolID: "",
      image: assets.a2,
      name: "DNE",
      teachers: [
        {
          teacherID: "",
          name: "Recep",
          school: "DNE",
          photo: assets.a5,
          branch: "Turkish Literature",
          homeworks: [],
          classrooms: [],
        },
        {
          teacherID: "",
          name: "Recep",
          school: "DNE",
          photo: assets.a5,
          branch: "Turkish Literature",
          homeworks: [],
          classrooms: [],
        },
      ],
      classrooms: [
        {
          name: "5-A",
          image: assets.a6,
          classroomID: "",
          homeworks: [
            {
              homeworkID: "",
              teacher:"",
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          image: assets.a6,
          name: "5-B",
          homeworks: [
            {
              homeworkID: "",
              teacher:"",
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          image: assets.a6,
          name: "6-B",
          homeworks: [
            {
              homeworkID: "",
              teacher:"",
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          image: assets.a6,
          name: "8-A",
          homeworks: [
            {
              homeworkID: "",
              teacher:"",
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
      ],
      students:[]
    },
    {
      schoolID: "",
      image: assets.a2,
      name: "FT",
      teachers: [
        {
          teacherID: "",
          school: "FT",
          photo: assets.a5,
          name: "Recep",
          branch: "Turksih Literature",
          homeworks:[],
          classrooms:[]
        },
        {
          teacherID: "",
          id: 369,
          school: "FT",
          photo: assets.a4,
          name: "Cansu",
          branch: "Math",
          homeworks:[],
          classroom:[]
        },
      ],
      classrooms: [
        {
          classroomID: "",
          teachers: [],
          students: [],
          image: assets.a7,
          name: "5-C",
          homeworks: [
            {
              homeworkID: "",
              teacher: "",
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          teachers: [],
          students: [],
          image: assets.a7,
          name: "5-D",
          homeworks: [
            {
              homeworkID: "",
              teacher: "",
              students: [],
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          teachers: [],
          students: [],
          image: assets.a7,
          name: "6-C",
          homeworks: [
            {
              homeworkID: "",
              teacher: "",
              students: [],
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
        {
          classroomID: "",
          teachers: [],
          students: [],
          name: "8-C",
          image: assets.a7,
          homeworks: [
            {
              homeworkID: "",
              teacher: "",
              students: [],
              start: `${tr.getFullDate(".")}`,
              end: `${tr.getFullDate(".")}`,
              topic: "Mustafa Kemal'in Kağnısı",
              task: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
              image: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
              imageTitle: "Image1",
            },
          ],
        },
      ],
    },
  ],
};

const data = [
  //ÖRNEK DATA////
  // {
  //   img: animations.wash_hand,
  //   classroom: "5-A SINIFI ÖDEVLERİ",
  //   atasozu: "Seher vakti bir güzele tutuldum!",
  //   homeworks: [
  //     {
  //       sinif: "5-A",
  //       baslama: `${tr.getFullDate(".")}`,
  //       bitis: `${tr.getFullDate(".")}`,
  //       konu: "Mustafa Kemal'in Kağnısı",
  //       odev: `Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.Mustafa Kemal'in Kağnısı şiirini deFTerimize yazalım. İlk üç etkinliği yapalım.`,
  //       img: assets[`a${Math.floor((Math.random() + 0.1) * 10)}`],
  //       imgTitle: "Image1",

  //     }
  //   ],
  // },
  ////////////////

  {
    img: animations.girl_bike,
    classroom: "5-A",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "5-A",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.woman_with_flower,
    classroom: "5-B",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "5-B",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.cat_with_hat,
    classroom: "6-B",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "6-B",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
  {
    img: animations.wash_hand,
    classroom: "8-A",
    homeworks: [
      {
        id: Math.floor(Math.random() * 10 ** 5),
        sinif: "8-A",
        baslama: `${tr.getFullDate(".")}`,
        bitis: `${tr.getFullDate(".")}`,
        konu: "ÖRNEK KONU",
        odev: `ÖRNEK ÖDEV: Lorem ipsum dolor sit amet, consectetur adipiscing elit. `,
      },
    ],
  },
];

export { atasozleri, data, schoolsData,dummyData };
