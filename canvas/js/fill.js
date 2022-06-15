// 塗りつぶし同系色範囲の記憶
var fillRange = 20;

// 塗りつぶし
function fill(dx, dy, width, image, color, rgb) {

	image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];

	// 上下左右に関して再帰的に塗りつぶし
	/*
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image = fill(dx, dy, width, image, color, rgb);
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image = fill(dx, dy, width, image, color, rgb);
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image = fill(dx, dy, width, image, color, rgb);
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image = fill(dx, dy, width, image, color, rgb);
	}
	dy -= 1;
	*/

	// なんかコールスタックエラー出てきたので、関数内で4倍の処理をやってしまうことに。(力技)
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image.data[(dy * width + dx) * 4] = rgb[0];
	image.data[(dy * width + dx) * 4 + 1] = rgb[1];
	image.data[(dy * width + dx) * 4 + 2] = rgb[2];
	dx -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dx -= 1;
	dy -= 1;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy += 2;
	if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
		image.data[(dy * width + dx) * 4] = rgb[0];
		image.data[(dy * width + dx) * 4 + 1] = rgb[1];
		image.data[(dy * width + dx) * 4 + 2] = rgb[2];
		dx -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dx -= 1;
		dy -= 1;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy += 2;
		if(Math.abs(image.data[(dy * width + dx) * 4] - color[0]) + Math.abs(image.data[(dy * width + dx) * 4 + 1] - color[1]) + Math.abs(image.data[(dy * width + dx) * 4 + 2] - color[2]) <= fillRange) {
			image = fill(dx, dy, width, image, color, rgb);
		}
		dy -= 1;
	}
	dy -= 1;
		}
		dy -= 1;
	}
	dy -= 1;

	return image;

}