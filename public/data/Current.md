# CURRENT

## CODE FEATURES

* animals and npcs to avoid obstacles when going to a specific destination
  * allow npcs (but not creatures) to cross rocks and weeds
  * npcs need to collide with furniture instead of ghosting through it
* npcs able to move between maps
* basic tutorials as pop-ups

## AUDIO

* find sounds (see spreadsheet for list)
* process sounds
* change sound references to collections for easy switching
* import sounds

## ISSUES

### Objects

* check tile offset toggle on furniture
* crafting queue not counting down while player is off-map
* shipping bins don't always trigger
* entrance plaza fountain appears twice
* crafting stations appear as gold cauldron

### World

* crops planted while soil is already wet don't get watered
* no tile for wet soil opposite corners
* watering can tool reach needs to be checked
* journal entry about divine crops somewhere
* divine crops for mushroom forest

### Creatures and Characters

* creature animations jitter when chasing player
* creatures not spawning often enough
* unity version update broke character bodydata associations

### User Interface

* backspace in the name field closes the window
* enter at end of dialogue or message should close the window (focus X)
* some ui windows overlap when game is played in a small window: character creation text, grid info
* prevent tool use while dialogue or message window is open
* crafting an item refreshes the inventory count for that item, but not all items
* controls remapping tabs aren't selectable
* keyboard navigation on inventory screens
  * implement for screens with multiple inventories
  * integrate flow with ui navigation for buttons

#### New UI Features

* sort inventory mechanic
* location indicator banner
* select material from item group for crafting
* crafting station able to use local storage chest items
* progress bar on queue items

### DIFFICULT TO REPRODUCE

* crafting can cause infinite queue
* soil becomes un-tilled
  * may be connected to destructibles spawning
  * could be connected to the crop changing sprites
* blade-apple crumble altar starts fulfilled

## CONTENT

* furniture: singing fish, toolbox
* upgrade tool animations
* petting / interaction animation
* fishing animations
* creature: squirrel
* tree: almond
* talk sprites: lyra, fang, sundeep
* talk emotes: josephine, nilam, mayumi, rick, ruth
* more quotes
* icons on grid info: crop fertilizer and water, animal pet
* cutscene: chanda's caution

### ADD TO CC

* skin color: ruddy, ruddy grey, ice mint
* clothes color: camo
* bottoms style: slit skirt
* hair style: sideswept
* hair color: dark grey