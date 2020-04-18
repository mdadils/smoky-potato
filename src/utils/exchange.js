export const connect = ({x1, y1, x2, y2, startId, endId, showConnection, }) => {
  var K = 0.37;

  var namespace = "http://www.w3.org/2000/svg";
  function svg(tag, attribs) {
    var e = document.createElementNS(namespace, tag);
    if (typeof attribs == "object") {
      var k, v;
      for (k in attribs) {
        v = attribs[k];
        e.setAttribute(k, v);
      }
    }
    return e;
  }

  var root = svg("svg", {
    width: "512",
    height: "512",
    viewBox: "-20 -20 640 640",
  });
  var d = "M" + x1 + "," + y1;
  var dx = x2 - x1;
  var dy = y2 - y1;
  var i, x, y;
  for (i = 1; i <= dx; i += 5) {
    x = x1 + i;
    y = y2 - (dy / 2 + (dy * Math.cos((Math.PI * i) / dx)) / 2);
    d += "L" + Math.floor(0.5 + x) + "," + Math.floor(0.5 + y);
  }
  var path = svg("path", {
    stroke: "#0f0",
    "stroke-width": 4,
    fill: "none",
    d: d + "L" + x2 + "," + y2,
  });
  root.appendChild(path);
  path = svg("path", {
    stroke: "#000",
    "stroke-width": 1,
    fill: "none",
    d:
      "M" +
      x1 +
      "," +
      y1 +
      "C" +
      (x1 + K * dx) +
      "," +
      y1 +
      "," +
      (x2 - K * dx) +
      "," +
      y2 +
      "," +
      x2 +
      "," +
      y2,
  });
  root.appendChild(path);
  root.appendChild(
    svg("circle", {
      cx: x1,
      cy: y1,
      r: 4,
      stroke: "#000",
      "stroke-width": 0.5,
      fill: "rgba(255,0,0,.3)",
    })
  );
  root.appendChild(
    svg("circle", {
      cx: x2,
      cy: y2,
      r: 4,
      stroke: "#000",
      "stroke-width": 0.5,
      fill: "rgba(255,0,0,.3)",
    })
  );
  return root;
};
