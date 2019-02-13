
# Wind Waker Graphics Analysis

### Learning from the masters

I’m a huge fan of Zelda, The Wind Waker’s graphics. Bright, caricatured and well balanced; they were a masterful combination of artistry and technical ingenuity.

![](https://cdn-images-1.medium.com/max/3840/1*mQdA-FVXQKjPpYalFhEdPA.jpeg)

By accepting the limitations of the hardware, and pushing for a stylised aesthetic, the artists and developers created one of the most-loved video game styles ever made. Even today they don’t look outdated, which is something you can say about very few games.

So how on earth did they achieve this? How did they merge the use of tiny textures with insanely low-poly geometries to create such heartwarming visuals?

![](https://cdn-images-1.medium.com/max/3840/1*uqlpxigvxxjGdhGbw3QHDQ.jpeg)

In an attempt to learn from these masters, through analysing the game’s texture reads and a wireframe rendering, I’ll try to re-create some of the game’s visual effects using Threejs.

![](https://cdn-images-1.medium.com/max/3840/1*deskerArC0CPSZAka6C-Mg.jpeg)

For the ultimate experience, I’d recommend listening to the [incredibly uplifting soundtrack](https://www.youtube.com/watch?v=KnJiC8FeI2I) while reading on…

## Analyses

Click on the following links to access each analysis — each include a detailed walk-through and working codepens of the recreated effect.

* [*The Ocean*](https://medium.com/@gordonnl/the-ocean-170fdfd659f1)

![](https://cdn-images-1.medium.com/max/3794/1*eS4IPO4qdLCFm-Te6Ba-uw.jpeg)

* [*Fire and Haze*](https://medium.com/@gordonnl/fire-and-haze-b4561743b17)

![](https://cdn-images-1.medium.com/max/3794/1*S6nwZ3Hhmm01Y1VQc1XwNA.jpeg)

* [*Link’s Expressions*](https://medium.com/@gordonnl/links-expressions-eb7beae2c62c)

![](https://cdn-images-1.medium.com/max/3200/1*WWiMA12Gc7yUL0IIYZCnhw.jpeg)

* [*Wind*](https://medium.com/@gordonnl/wind-f4fc7a3b366a)

![](https://cdn-images-1.medium.com/max/3200/1*j8JIWUsfwUCuRT0yeIFjlw.jpeg)

## To be continued

Writing about these takes a while longer than just figuring them out, so please bear with me.

### In Progress:

* Explosions and Smoke

* Splash

* Lighting

### Todo list:

* Clouds

* Wake

* Shoreline

* Waterfall

Please let me know if there are any effects in the game that you’d like to see analysed that aren’t on this list.

### Change of format?

I initially thought I’d make one long article featuring all of the analyses one after the other as an easier way to read, but quickly realised actually how impossibly long that would be. So, I’ve chosen to separate them into unique articles, reducing the amount of videos and images your devices need to keep in memory at a time.

### Notes on the Gamecube

After publishing the first analysis, I received a lot of really amazing feedback, such as [this excellent overview](https://www.reddit.com/r/programming/comments/5cffew/wind_waker_graphics_analysis/d9wqpar/) of the gamecube’s pipeline. It all helped me to further my understanding of the limitations that the developers faced, compared with the powerful pipeline available to us today. Even better, it helped me realise just how wrong I was about some things!

![](https://cdn-images-1.medium.com/max/2800/1*upaksG-1j90YT_HPQEZk5w.jpeg)

The biggest lesson being that the gamecube just flat-out did not have vertex and fragment shaders! In fact, only a very premature version of the kind of programmable shaders used today even existed at that time.

The GPU inside the gamecube *did* allow the developers to program a number of image processing and blending functions. [Here is a brilliant project](http://magcius.github.io/bmdview.js/bmdview.html) that has taken some of these GPU commands and transformed them into modern graphics shaders — the associated github can be found [here](https://github.com/magcius/bmdview).

As an example of what could be achieved, the developers could use a black and white image mask — as used in the ocean, fire and particle effects — and apply colours to those regions.

![](https://cdn-images-1.medium.com/max/2800/1*GJMz1cHLOdv8tSlhIBQ2QQ.jpeg)

A lot of information on the gamecube’s GPU, *Flipper*, can be found in [this extremely informative](https://dolphin-emu.org/blog/2014/03/15/pixel-processing-problems/) article about the [Dolphin Emulator](https://dolphin-emu.org/) and the progress that they have made. None of this would have been possible without that amazing emulator, so my deepest thanks goes out to the developers!

Below is a detailed diagram of the graphics pipeline found in that article. Glean from it what you can!

![](https://cdn-images-1.medium.com/max/6000/1*QQANxq4-KLNDn_5IJdVFKw.jpeg)

So, even though the Gamecube didn’t support programmable shaders, I will continue to make them as advanced as necessary, along with other modern techniques in my recreations. This is a learning exercise after-all, so I still want to use the most efficient techniques to my knowledge, while applying the concepts that the Nintendo devs put in place all those many years ago!

## More

Love reading game and graphics analyses? Check out these great sources:

* Simon Schreibt’s [Game Art Tricks](https://simonschreibt.de/game-art-tricks/)

* The Cutting Room Floor’s [huge post on Wind Waker](https://tcrf.net/The_Legend_of_Zelda:_The_Wind_Waker)

* Youtube channel [Makin’ Stuff Look Good](https://www.youtube.com/channel/UCEklP9iLcpExB8vp_fWQseg)

* Adrian Courrèges’ [Graphics Study Blog](http://www.adriancourreges.com/blog/)

* [r/videogamescience](https://www.reddit.com/r/videogamescience/)

* [r/TheMakingOfGames](https://www.reddit.com/r/TheMakingOfGames/)

Special thanks goes to the amazing [Dolphin Emulator](https://dolphin-emu.org/)’s devs — you guys are absolute champs in my book.

[*Onto the first analysis — The Ocean*](https://medium.com/@gordonnl/the-ocean-170fdfd659f1#.t3u0ccarv)
