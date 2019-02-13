![](https://windwaker.graphics/assets/images/wind/header.jpeg)

# Wind

### Wind Waker Graphics Analysis Series

##### *By [Nathan Gordon](https://twitter.com/gordonnl)*

[*Back to main article*](https://windwaker.graphics)

It’s been over a year since my last Wind Waker article… slap on the wrist. I’m going to ease back in with a nice and simple, but very applicable effect.

Wind effects are used throughout the game, often just for ambient touches while sailing etc, but also very successfully in many focal visual effects. For example, the warp-point below — used to transport the character to another location. This is what we’ll be re-creating.

<video src="https://windwaker.graphics/assets/videos/wind/reference.mp4" playsinline loop muted autoplay="autoplay"></video>

And here’s the final version using Threejs:

<video src="https://windwaker.graphics/assets/videos/wind/recreation.mp4" playsinline loop muted autoplay="autoplay"></video>

As usual, a working Codepen can be found at the bottom of this article.

## Thick Lines

What we’re creating here is based from a geometry-generation technique called *Thick Lines* or *Ribbons*. They are when you take a curve, and extend the edges so that the curve has thickness.

![](https://windwaker.graphics/assets/images/wind/lines.jpeg)

On today’s console and PC games, this would be achieved using a Geometry Shader. On the gamecube and WebGL however, we don’t have that ability.

Instead, we can achieve the effect in quite a few ways. The simplest, and one that works perfectly for our needs, is to just push and pull the vertices along a single axis using javascript. For example, here is some pseudocode explaining how to do this along the Y axis.

    create new empty geometry
    for each point in our curve
        create two vertices at the point's location
        push the first vertex's Y position up
        pull the second vertex's Y position down

So if we apply this to a simple curve, we’ll get something like this.

![](https://windwaker.graphics/assets/images/wind/simple-curve.png)

That’s all we need to create our spiral geometry. However, just to cover all bases, if the curve is a little more complex, we’ll start to run into problems.

![](https://windwaker.graphics/assets/images/wind/loop.png)

Here the edges of the loop don’t extend outwards like you’d expect them to. What we’d need here is to be able to push the vertices in a direction perpendicular from the direction of the curve, and to do that we need to take into account each segment’s direction.

![](https://windwaker.graphics/assets/images/wind/segment-direction.jpeg)

Using the above diagram as a guide, what we need to find is the cross-product of *ab* and *bc*, which would be a vector looking straight towards us. Then we’d rotate that vector 90 degrees around the vector *ac*, leaving us with the offset direction.

If we’re able to calculate this correctly, we’d get something like this.

![](https://windwaker.graphics/assets/images/wind/loop-correct.png)

## Generating A Spiral

In the final effect, I’ve duplicated a single spiral curve 6 times, all slightly offset and animating at different speeds.

To generate a spiral simply, it’s actually much easier to do so using code than by hand in a 3D program. Here’s the final spiral curve used in the example.

![](https://windwaker.graphics/assets/images/wind/spiral.png)

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

<video src="https://windwaker.graphics/assets/videos/wind/single.mp4" playsinline loop muted autoplay="autoplay"></video>

All that’s animating here is the texture on top of the geometry. For the gamecube, the developers would have used a texture, however I remade this using a shader. I’ll break it into a couple of steps, using a basic quad to illustrate.

<video src="https://windwaker.graphics/assets/videos/wind/texture.mp4" playsinline loop muted autoplay="autoplay"></video>

First I create an opaque section with a falloff, and get it to translate across the shape.

<video src="https://windwaker.graphics/assets/videos/wind/falloff.mp4" playsinline loop muted autoplay="autoplay"></video>

Then I round the edges to make it look smoother and have a tapered start and end to the line.

<video src="https://windwaker.graphics/assets/videos/wind/taper.mp4" playsinline loop muted autoplay="autoplay"></video>

Then finally I fade the shape at the beginning and end to hide the ends of the geometry.

When all the lines are animating together, I offset the timing so that they’re not all animating at the same time.

As a general rule, always try to hide the patterns by adding slight variations to make it more visually interesting.

The finishing touch is just to rotate the entire group of spirals, to again make it more difficult to notice the geometry’s actual shape.

<video src="https://windwaker.graphics/assets/videos/wind/rotation.mp4" playsinline loop muted autoplay="autoplay"></video>

### End

I find this is a really cool effect for fairly limited effort. While recreating the animation I kept noticing little touches they’d added, like the fading of the texture at the beginning and end. It’s attention to detail like this that really helps sell the effect and hide the extremely simple underlying nature.

Below you can find the full code source in a working Codepen.

<iframe src="https://medium.com/media/72ab8e38dbc4928a94dc121850efca5c" frameborder=0></iframe>

*Coming soon — Particle Explosions*

[*Back to main article*](https://windwaker.graphics)

##### *By [Nathan Gordon](https://twitter.com/gordonnl)*