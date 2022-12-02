// 1. Define a color for the snow
snowStorm.snowColor = '#fff';

// 2. To optimize, define the max number of flakes that can
// be shown on screen at once
snowStorm.flakesMaxActive = 35; // Coolboy here, I set the number to 35 so it's not as intense on 
                                // less powerful hardware.

// 3. Allow the snow to flicker in and out of the view
snowStorm.useTwinkleEffect = true; 

// 4. Start the snowstorm!
snowStorm.start();
