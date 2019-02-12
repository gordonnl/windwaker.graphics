
# Wind

Wind

### Wind Waker Graphics Analysis Series

[*Back to main article](https://medium.com/@gordonnl/wind-waker-graphics-analysis-a0b575a31127#.l6e4yz5ys)*

It’s been over a year since my last Wind Waker article… slap on the wrist. I’m going to ease back in with a nice and simple, but very applicable effect.

Wind effects are used throughout the game, often just for ambient touches while sailing etc, but also very successfully in many focal visual effects. For example, the warp-point below — used to transport the character to another location. This is what we’ll be re-creating.

<iframe src="https://medium.com/media/a52696297df657185129ff4b6a8397f4" frameborder=0></iframe>

And here’s the final version using Threejs:

<iframe src="https://medium.com/media/312183256df0869482885f3cc27f94f5" frameborder=0></iframe>

As usual, a working Codepen can be found at the bottom of this article.

## Thick Lines

What we’re creating here is based from a geometry-generation technique called *Thick Lines* or *Ribbons*. They are when you take a curve, and extend the edges so that the curve has thickness.

![](https://cdn-images-1.medium.com/max/2800/1*sLIsREECyBups3jQFbk7zg.jpeg)

On today’s console and PC games, this would be achieved using a Geometry Shader. On the gamecube and WebGL however, we don’t have that ability.

Instead, we can achieve the effect in quite a few ways. The simplest, and one that works perfectly for our needs, is to just push and pull the vertices along a single axis using javascript. For example, here is some pseudocode explaining how to do this along the Y axis.

    create new empty geometry
    for each point in our curve
        create two vertices at the point's location
        push the first vertex's Y position up
        pull the second vertex's Y position down

So if we apply this to a simple curve, we’ll get something like this.

![](https://cdn-images-1.medium.com/max/3740/1*s1nT9DoCy2v99othT7XNRQ.png)

That’s all we need to create our spiral geometry. However, just to cover all bases, if the curve is a little more complex, we’ll start to run into problems.

![](https://cdn-images-1.medium.com/max/3688/1*Ar0rDiuj-41mJOZkgR3ugg.png)

Here the edges of the loop don’t extend outwards like you’d expect them to. What we’d need here is to be able to push the vertices in a direction perpendicular from the direction of the curve, and to do that we need to take into account each segment’s direction.

![](https://cdn-images-1.medium.com/max/2800/1*Hr5I6U7Vk3vYnKTc7SxDyg.jpeg)

Using the above diagram as a guide, what we need to find is the cross-product of *ab* and *bc*, which would be a vector looking straight towards us. Then we’d rotate that vector 90 degrees around the vector *ac*, leaving us with the offset direction.

If we’re able to calculate this correctly, we’d get something like this.

![](https://cdn-images-1.medium.com/max/3876/1*J7rRZ4T84BUhMBFkFY7KCg.png)

## Generating A Spiral

In the final effect, I’ve duplicated a single spiral curve 6 times, all slightly offset and animating at different speeds.

To generate a spiral simply, it’s actually much easier to do so using code than by hand in a 3D program. Here’s the final spiral curve used in the example.

![](https://cdn-images-1.medium.com/max/3624/1*nCvd00SJelQ6iLyy6h0ZSA.png)

Once again in pseudocode, here’s how to create a basic spiral.

    set radius to 10
    set angle to 0
    set height to 2

    for n amount of times
        make radius slightly smaller
        rotate angle by a small amount
        make height slightly smaller

        create new point
        set point x to radius * cos(angle)
        set point z to radius * sin(angle)
        set point y to height

So as you add more points, the radius get’s smaller and smaller, creating a spiral form. For the spiral used in the example, I tweaked some multipliers so that the rate of change wasn’t linear. This means that the radius decreases a lot at the beginning, but less over time. Doing so gives us more rotations near the middle, more closely resembling the reference.

## Animation

The animation is where the beauty of the effect lies. Surprisingly we don’t need to animate the geometry at all.

Here’s how a single animated spiral looks on its own.

<iframe src="https://medium.com/media/e83987789c3ea3f75992f40814ab9cde" frameborder=0></iframe>

All that’s animating here is the texture on top of the geometry. For the gamecube, the developers would have used a texture, however I remade this using a shader. I’ll break it into a couple of steps, using a basic quad to illustrate.

<iframe src="https://medium.com/media/92d3f7b739db4cfeefedd7dcd388e18f" frameborder=0></iframe>

First I create an opaque section with a falloff, and get it to translate across the shape.

<iframe src="https://medium.com/media/d66d49f3dd7a7b8aefe2cb31678af667" frameborder=0></iframe>

Then I round the edges to make it look smoother and have a tapered start and end to the line.

<iframe src="https://medium.com/media/d0771f47e1d7ecdd4ee9c225ab0c9504" frameborder=0></iframe>

Then finally I fade the shape at the beginning and end to hide the ends of the geometry.

When all the lines are animating together, I offset the timing so that they’re not all animating at the same time.

As a general rule, always try to hide the patterns by adding slight variations to make it more visually interesting.

The finishing touch is just to rotate the entire group of spirals, to again make it more difficult to notice the geometry’s actual shape.

<iframe src="https://medium.com/media/386309cced7d37e2435015a952bf8286" frameborder=0></iframe>

### End

I find this is a really cool effect for fairly limited effort. While recreating the animation I kept noticing little touches they’d added, like the fading of the texture at the beginning and end. It’s attention to detail like this that really helps sell the effect and hide the extremely simple underlying nature.

Below you can find the full code source in a working Codepen.

<iframe src="https://medium.com/media/72ab8e38dbc4928a94dc121850efca5c" frameborder=0></iframe>

*Coming soon — Particle Explosions*

[*Back to main article](https://medium.com/@gordonnl/wind-waker-graphics-analysis-a0b575a31127)*
