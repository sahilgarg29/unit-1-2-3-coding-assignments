async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();

    return data;
  } catch (error) {
    console.log("error: " + error);
  }
}

function appendData(data, cont) {
  data.forEach((el) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = el.strMealThumb;

    const h4 = document.createElement("h4");
    h4.textContent = el.strMeal;

    div.append(img, h4);
    cont.append(div);
  });
}

export { getData, appendData };
