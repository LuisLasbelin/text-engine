// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const kalambakaESDisk = () => ({
  roomId: 'start', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'start', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'VEKTOR',
      desc: `CÓDIGO DE CONEXIÓN: 85-83-69-82
      CÓDIGO DE MISIÓN: KALAMBAKA
      OBJETIVO ACTUAL: Establecer contacto con la entidad digital 111-100. Alias: Frame Odysseus
      
      - El comando **ITEMS** muestra las opciones disponibles.`,
      items: [
        {
          name: 'INFORMACION',
          desc: 'Información adicional de la misión.',
        },
        {
          name: 'plaza',
          desc: `Una pequeña plaza redonda de la que no recuerdas el nombre.`,
          onUse: () => println(`Usa **GO PLAZA** para ir a la plaza.`), // Called when the player uses the item.
        },
        {
          name: 'axe',
          desc: `You could probably USE it to cut the VINES, unblocking the door.`,
          isTakeable: true, // Allows the player to take the item.
          onUse() {
            // Remove the block on the room's only exit.
            const room = getRoom('start');
            const exit = getExit('north', room.exits);

            if (exit.block) {
              delete exit.block;
              println(`You cut through the vines, unblocking the door to the NORTH.`);

              // Update the axe's description.
              getItem('axe').desc = `You USED it to cut the VINES, unblocking the door.`;
            } else {
              println(`There is nothing to use the axe on.`);
            }
          },
        }
      ],
      exits: [
        {
          dir: 'meteora', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'clearing',
          block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
        },
      ],
    },
    {
      id: 'clearing',
      name: 'A Forest Clearing',
      desc: `It's a forest clearing. To the SOUTH is The First Room.`,
      exits: [
        {
          dir: 'south',
          id: 'start',
        },
      ],
    }
  ],
});
