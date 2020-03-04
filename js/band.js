$(".thumbs").on("mouseenter", function(){
    $(this).children("h6").css("color", "gray");
    $(this).children("img").css("opacity", "0.8");
    
});
$(".thumbs").on("mouseleave", function(){
    $(this).children("h6").css("color", "#e0cb7d");
    $(this).children("img").css("opacity", "1");
});


var members = {
    "tuomas":{
        "name":"Tuomas Holopainen",
        "prop":"Keyboards & Composer",
        "img":"https://image.ibb.co/hvzi9f/tuomas-Profile.png",
        "info":{
            "p1":"I was born Tuomas Lauri Johannes Holopainen into a family of four, on Christmas Day 1976. Since then my home has been a small city of Kitee in North Carelia, Finland. Music came into my life at the age of 6 when my mother made me take piano lessons in a music school of Carelia, followed by clarinet and tenor saxophone studies some years later. Having completed the music theory classes together with final exams in the instruments, I got my graduation diploma at the age of 15, the same year I took off to Kansas for a year as a foreign exchange student. Ashamed to say, I haven’t touched neither the clarinet nor the sax since the military band in ‘96-'97.",
            "p2":"In September 1992 my host family took me to see Metallica and Guns 'N Roses in Kansas City, a concert that would have a huge impact on my musical influences and, well, life altogether. Returning from the States in '93, I was asked to join a band of my mates’ called “Dismal Silence”. It was soon followed by Nattvindens Gråt & Darkwoods My Betrothed. These bands were mainly the brainchildren of my high school friend, Teemu Kautonen, who I have a lot to thank for, as he mentored me into the world of songwriting and lyrics. After some years in those groups, the idea of Nightwish was born in the fall of 1996. ",
            "p3":"Besides Nightwish, some of my past side projects / additional musical adventures include Sethian, For My Pain, Kotiteollisuus, Timo Rautiainen & Trio Niskalaukaus, Silentium (producer) & Indica (producer)."
        }
    },
    "marco":{
        "name":"Marco Hietala",
        "prop":"Bass & Vocals",
        "img":"https://image.ibb.co/bGnZh0/marco-Profile.png",
        "info":{
            "p1":"I was born as a younger son and named Marko Tapani Hietala, completing the Hietala family of four. My birth date is 14th of January 1966. I lived my first 15 years in Tervo, a little Savonian town in Middle Finland with a total population of about 2,500. No offence, I still have friends and family there…",
            "p2":"I’ve been hooked by music ever since I can remember. My first musical memories were my father’s lullabies and his acoustic guitar. My father’s record collection included all kinds of Jazz, Classical, Irish Folk songs, Beatles, Elvis and obscure Finnish Folk Rock albums. I started singing at the age of 11 and bashing my father’s acoustic at the age of 12. By the age of 13, I was already in my first school band called “Sabotage” (no accident there, Black Sabbath was already a huge influence along with Dio-era “Rainbow” and their ilk) playing bass and singing. Punk Rock and Metal was already our main thing.",
            "p3":"Driven by the spark for music, at the age of 15, I left Tervo for Kuopio, a nearby town of 80,000 people. There I went to a musical high school to study classical guitar, vocals and musical theory for three years. I continued to Oulunkylä Pop and Jazz Conservatory in Helsinki for a year and a half, but eventually dropped out when Tarot got a deal for our first album in 1986 and started touring — Tarot being the first “pro” band me, my brother Zac, and the drummer Pecu Cinnari had put together in 1984."
        }
    },
    "floor":{
        "name":"Floor Jansen",
        "prop":"Vocals",
        "img":"https://image.ibb.co/j2F4h0/floor-Profile.png",
        "info":{
            "p1":"After a high school musical, this young Flying Dutchy got hooked for life to music, singing and performing. It turned out to become a colorful career.",
            "p2":"I was born in the snowy February the 21st in 1981. I must have liked to cold and the snow for I moved to Finland 33 years later. A choice made to learn the language and the culture of my Finnish band mates. Guys I met over 10 years ago on a European tour where my Dutch band After Forever supported Nightwish. We got along very well and always stayed in touch throughout the years. Life is full of surprises, and here I am, living in Finland and singing in Nightwish!",
            "p3":"Back in 1997 I did an audition in a small rehearsal space from a metal band called After Forever. The guys wanted a female background singer. I loved rock and metal and bands with female singers where almost non-existing but it fascinated me. The Gathering was the band that made me want to sing in a metal band too! Then came Nightwish’s first album, and Within Temptation. I soon became the front lady in After Forever and our demo of 1999 got us a record deal. In 2000 we released our first album Prison of Desire. Recorded when I was 18 with not a single vocal lesson in my life. This would soon change when I started studying at the Rockacadamy, a new school in The Netherlands. Many albums and 6 years of studying later After Forever ended in its prime time. I decided to continue with a new metalband called ‘ReVamp. This band still exists but is currently on hold due to my intense program with Nightwish."
        }
    },
    "jukka":{
        "name":"Jukka Nevalainen",
        "prop":"Drums",
        "img":"https://image.ibb.co/geYX20/jukka-Profile.png",
        "info":{
            "p1":"I was born in Kitee, Finland, on 21st of April 1978. I led a very happy childhood in a family of five: me, my mom, dad, sister and brother. Pesäpallo, a Finnish variant of baseball, played a big part in my life in the early years, but at the age of 11, music finally saved me from sports (or maybe it saved sports from me, I don’t know.). Anyhow, at the age of 11, I took the entrance examination of the percussion line of our local music school, and, to my pleasant surprise, I got in. My journey to the miraculous world of music had begun.",
            "p2":"I quickly noticed that I really enjoyed myself behind the drums. At the music school I learned the basics of musical theory and quickly developed the basic skills to keep my set together. In junior high school I got to play in our school band, led by our music teacher Plamen Dimov. We played a kind of Funk-Jazz-Rock mix and mainly had classic cover songs in our set. But if you’re really into something, it takes more than a teenage whimsy to keep you away forever…",
            "p3":"A year or so later a friend of mine who needed a drummer asked me to join his band. After thinking about it for a short while, I decided to go for it. So there I was, joining my first “garage band”, well on my path to depravity. I can’t remember if we ever really came up with a name for the band. Their musical direction was really not for me, but it was a great opportunity to get to play in a band and record a demo for the first time."
        }
    },
    "emppu":{
        "name":"Emppu Vuorinen",
        "prop":"Guitars",
        "img":"https://image.ibb.co/iMQ6Uf/emppu-Profile.png",
        "info":{
            "p1":"After careful planning and execution, Emppu and his twin brother popped out on June 24, 1978 in Kitee to the joy of the Vuorinen family. The final number of siblings came to be five: me, bro and three wonderful sisters. The family is completed by my mom and dad, the instigators of this chaos.",
            "p2":"My childhood and youth were spent as they’re usually spent, doing this and that: sports, wandering in the woods, playing music, and occasionally even studying. After playing in numerous bands, our paths finally crossed with Tuomas and the rest of the guys. And I’m still on that path. It’s a winding road that’s sometimes a little bumpy, but we’re speeding on with terrible clatter and sputter.",
            "p3":"I got seriously into music when I was about 11, thanks to a couple of guitarist buddies, especially Matti Turunen. He was the one responsible for the snowball effect in my playing."
        }
    },
    "troy":{
        "name":"Troy Donockley",
        "prop":"Uillean Pipes, Low Whistles, Bodhran, Bouzouki & Vocals",
        "img":"https://image.ibb.co/f7x6vL/troy-Profile.png",
        "info":{
            "p1":"I was born as a baby in Cumbria to my wondrous parents. I spent my childhood dreaming of being a musician and aged 16 I achieved an end of year school report which read - “Troy seems to be out at sea, and it looks like he’s never coming back”.",
            "p2":"Since then, I have been lucky enough to prove them right and have spent all of my life and adventures immersed in writing and performing music. I also have a glorious wife Terri and glorious daughter Mia and live in a little village in North Yorkshire.",
            "p3":"For more info go to - <a href='http://troydonockley.co.uk' target='_blank' id='troyLink'>www.troydonockley.co.uk.</a>"
        }
    },
    "kai":{
        "name":"Kai Hahto",
        "prop":"Drums on 'Enless Forms Most Beautiful'",
        "img":"https://image.ibb.co/kLFFpf/kai-Profile.png",
        "info":{
            "p1":"Born in 1973 in Vaasa, Finland, Kai started playing the drums at the age of 6. His mother and father saw him hitting on all pots and pans in the kitchen since he was 3 years old, so they decided to buy him a real drum kit. He started practicing along with Iron Maiden, AC/DC, Twisted Sister, Kiss, etc. style of bands on the 80’s Heavy Metal music, but also searching his father’s record collection including all kinds of music from Finnish folk music to Elvis, Jazz etc..",
            "p2":"Since he was 13 years old, he played in local bands until the late 80’s when he formed Cartilage with a couple of his friends. The band was heavily influenced by early 90’s Death Metal and the band became very popular in the underground scene.",
            "p3":"After Cartilage broke up, Kai played and recorded in many bands during the 90’s: Vomiturition, Misantropia, Rotten Sound, Wings, Enochian Crescent, to name a few."
        }
    }
};

$(".memberChoice").on("click", function(){
    
    if(!$(this).attr('class').includes('active')){
        $('.memberChoice').removeClass('active');
        $(this).addClass('active');
        var name = $(this).prop("id");
        $("#bandDetails").find("h4").hide().html(members[name].name).fadeIn("fast");
        $("#bandDetails").find("h5").hide().html(members[name].prop).fadeIn("fast");  
        $("#profImg").hide();
        $("#profImg").prop("src", members[name].img).delay(600).fadeIn(400);
        $("#p1").hide().html(members[name].info.p1).fadeIn("fast");
        $("#p2").hide().html(members[name].info.p2).fadeIn("fast");
        $("#p3").hide().html(members[name].info.p3).fadeIn("fast");
        
    }
       
});

$(".thumbs").on("click", function(){
    var thisId = $(this).prop("id").split("_")[0];
    $("#bandDetails").find("h4").html(members[thisId].name);
    $("#bandDetails").find("h5").html(members[thisId].prop);  
    $("#profImg").prop("src", members[thisId].img);
    $("#p1").html(members[thisId].info.p1);
    $("#p2").html(members[thisId].info.p2);
    $("#p3").html(members[thisId].info.p3);

    $("#bandDisplay").fadeOut(500);
    $("#bandDetails").delay(750).fadeIn("slow");
    $("#sideMenu").find("#"+thisId).addClass('active');
    console.log($('#sideMenu').find('#floor'));
    

    
    
});