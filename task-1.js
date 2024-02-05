const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

console.log(colors);

const rev_colors = [];

// for (const color of colors) {
//     rev_colors.unshift(color);
// }
//     console.log(rev_colors)

const reversed_colors = [];
	
for (let i = 0; i < colors.length; i++) {
	
	const color = colors[i];

    reversed_colors.unshift(color);}

    console.log(reversed_colors);
