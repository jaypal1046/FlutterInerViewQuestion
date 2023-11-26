export default async function sitemap() {
  const baseUrl = "https://www.flutterinerviewquestion.com";
  async function getTopPost() {
    const news = await fetch(
      "https://jaypal1046.pythonanywhere.com/getPostMostViewDataAll",
      {
        next: {
          revalidate: 60, //use 30 to opt  out of using catch
        },
      }
    );
    return news.json();
  }
  const getCategory = async () => {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/getHomeComData/ListOfCategory/Category",
      { cache: "no-store" }
    );

    if (!res.ok) {
      throw new Error("Feaild to get Category");
    }

    return res.json();
  };

  const getCategorypost = await getCategory();
  const categoryUrl =
    getCategorypost["data"].map((category) => {
      return {
        url: `${baseUrl}/${category.href}`,
        lastModified: new Date(),
      };
    }) ?? [];

  const getPost = await getTopPost();

  const postUrl =
    (await getPost.data.map((post) => {
      return {
        url: `${baseUrl}/${post.id}`,
        lastModified: new Date(),
      };
    })) ?? [];

  async function getFlutterEasy() {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/Getcollection/0/Flutter",
      {
        next: {
          revalidate: 30, //use 30 to opt  out of using catch
        },
      }
    );
    return res.json();
  }
  const getFlutter = await getFlutterEasy();
  const FlutterUrl =
    getFlutter["data"].map((Flutter) => {
      return {
        url: `${baseUrl}/Flutter/${Flutter.QID}`,
        lastModified: new Date(),
      };
    }) ?? [];


    async function getFlutterMediam() {
      const res = await fetch(
        "https://jaypal1046.pythonanywhere.com/Getcollection/1/Flutter",
        {
          next: {
            revalidate: 30, //use 30 to opt  out of using catch
          },
        }
      );
      return res.json();
    }
    const getMFlutter = await getFlutterMediam();
    const FlutterMUrl =
      getMFlutter["data"].map((Flutter) => {
        return {
          url: `${baseUrl}/Flutter/${Flutter.QID}`,
          lastModified: new Date(),
        };
      }) ?? [];


      
    async function getFlutterAd() {
      const res = await fetch(
        "https://jaypal1046.pythonanywhere.com/Getcollection/2/Flutter",
        {
          next: {
            revalidate: 30, //use 30 to opt  out of using catch
          },
        }
      );
      return res.json();
    }
    const getAdFlutter = await getFlutterAd();
    const FlutterAdUrl =
      getAdFlutter["data"].map((Flutter) => {
        return {
          url: `${baseUrl}/Flutter/${Flutter.QID}`,
          lastModified: new Date(),
        };
      }) ?? [];


  async function getDartEasy() {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/Getcollection/0/Dart",
      {
        next: {
          revalidate: 30, //use 30 to opt  out of using catch
        },
      }
    );

    return await res.json();
  }

  const getDart = await getDartEasy();
  const DartUrl =
    (await getDart.data.map((dart) => {
      return {
        url: `${baseUrl}/Dart/${dart.QID}`,
        lastModified: new Date(),
      };
    })) ?? [];


    async function getDartMediam() {
      const res = await fetch(
        "https://jaypal1046.pythonanywhere.com/Getcollection/1/Dart",
        {
          next: {
            revalidate: 30, //use 30 to opt  out of using catch
          },
        }
      );
  
      return await res.json();
    }
  
    const getMDart = await getDartMediam();
    const DartMUrl =
      (await getMDart.data.map((dart) => {
        return {
          url: `${baseUrl}/Dart/${dart.QID}`,
          lastModified: new Date(),
        };
      })) ?? [];


      async function getDartAd() {
        const res = await fetch(
          "https://jaypal1046.pythonanywhere.com/Getcollection/2/Dart",
          {
            next: {
              revalidate: 30, //use 30 to opt  out of using catch
            },
          }
        );
    
        return await res.json();
      }
    
      const getAdDart = await getDartAd();
      const DartAdUrl =
        (await getAdDart.data.map((dart) => {
          return {
            url: `${baseUrl}/Dart/${dart.QID}`,
            lastModified: new Date(),
          };
        })) ?? [];







  async function getOOPsEasy() {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/Getcollection/0/OOPs",
      {
        next: {
          revalidate: 30, //use 30 to opt  out of using catch
        },
      }
    );
    return res.json();
  }

  const getOOPs = await getOOPsEasy();
  const OOPsUrl =
    getOOPs["data"].map((OOPs) => {
      return {
        url: `${baseUrl}/OOPs/${OOPs.QID}`,
        lastModified: new Date(),
      };
    }) ?? [];

  async function getOOPsMediam() {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/Getcollection/1/OOPs",
      {
        next: {
          revalidate: 30, //use 30 to opt  out of using catch
        },
      }
    );
    return res.json();
  }

  const getMOOPs = await getOOPsMediam();
  const OOPsMUrl =
    getMOOPs["data"].map((OOPs) => {
      return {
        url: `${baseUrl}/OOPs/${OOPs.QID}`,
        lastModified: new Date(),
      };
    }) ?? [];

  async function getOOPsAd() {
    const res = await fetch(
      "https://jaypal1046.pythonanywhere.com/Getcollection/2/OOPs",
      {
        next: {
          revalidate: 30, //use 30 to opt  out of using catch
        },
      }
    );
    return res.json();
  }

  const getAdOOPs = await getOOPsAd();
  const OOPsADUrl =
    getAdOOPs["data"].map((OOPs) => {
      return {
        url: `${baseUrl}/OOPs/${OOPs.QID}`,
        lastModified: new Date(),
      };
    }) ?? [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/Flutter`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/Dart`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/OOPs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },

    ...DartUrl,
    ...FlutterUrl,
    ...OOPsUrl,
    ...categoryUrl,
    ...postUrl,

    ...OOPsADUrl,
    ...OOPsMUrl,

    ...DartAdUrl,
    ...DartMUrl,
    ...FlutterMUrl,
    ...FlutterAdUrl,
  ];
}
