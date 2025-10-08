### CURRENT

##### CODE FEATURES

* animals and npcs to avoid obstacles when going to a specific destination
  * allow npcs (but not creatures) to cross rocks and weeds
  * npc wandering fix (fixed update?)
* sort inventory mechanic
* location indicator banner
* select material from item group for crafting
* crafting station able to use local storage chest items
* progress bar on queue items
* npcs able to move between maps

##### ISSUES

* check tile offset toggle on furniture
* crops planted while it's raining don't get watered
* no tile for wet soil opposite corners
* creature animations jitter when chasing player
* rose garden south should not lead to town
* crafting queue not counting down while player is off-map
* shipping bins don't always trigger

* backspace in the name field closes the window
* enter at end of dialogue should close the window (focus X)
* tooltip sometimes appears in middle of screen
* crafting an item refreshes the inventory count for that item, but not all items
* check keyboard navigation on inventory screens

##### CONTENT

* furniture: singing fish, toolbox
* upgrade tool animations
* petting / interaction animation
* fishing animations
* creature: squirrel
* tree: almond
* talk sprites: lyra, fang, sundeep
* talk emotes: josephine, nilam, mayumi, rick, ruth
* more quotes
* forest: swirling haze screen border until circle is found
* icons on grid info: crop fertilizer and water, animal pet

##### ADD TO CC

* skin color: ruddy, ruddy grey, ice mint
* clothes color: camo
* bottoms style: slit skirt
* hair style: sideswept
* hair color: dark grey

##### DIFFICULT TO REPRODUCE

* crafting can cause infinite queue
* soil becomes un-tilled
  * may be connected to destructibles spawning
  * could be connected to the crop changing sprites
* blade-apple crumble altar starts fulfilled
* mini workbench: wrong animation & infinite queue