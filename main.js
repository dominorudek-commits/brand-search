// List of supported brands (you can add or remove as needed)
const supportedBrands = [
  "Acne Studios", "Adidas", "Amazon", "Apple", "Arc’teryx", "Argos", "Balenciaga", "Bape",
  "Best Buy", "Best Secret", "Boots", "Broken Planet Market", "Bulgari", "Burberry", 
  "Canada Goose", "Cartier", "Chanel", "Cettire", "Chrome Hearts", "Chrono24", "Corteiz",
  "Currys", "Culture Kings", "De Bijenkorf", "Denim Tears", "Dior", "Dover Street Market",
  "Dyson", "eBay", "eBay Authentication", "End", "Farfetch", "Flannels", "Flight Club",
  "Frasers", "Gallery Dept", "Goat", "Grailed", "Gucci", "Harrods", "Hermès", "JD",
  "John Lewis", "Legit App", "LuisaViaRoma", "Louis Vuitton", "Loro Piana", "Maison Margiela",
  "Moncler", "Mr Porter", "Neiman Marcus", "Nike", "Nordstrom", "Off-White", "Offspring",
  "PacSun", "Pop Mart", "Prada", "Ralph Lauren", "Rick Owens", "Saint Laurent", "Saks Fifth Avenue",
  "Samsung", "Selfridges", "Sephora", "Sneakersnstuff", "Snkrs", "Snkrs – Got ‘Em", "Sp5der",
  "SSENSE", "Stadium Goods", "Stanley", "StockX", "Supreme", "Syna World", "Trapstar", "UGG",
  "Vinted Verification", "Vivienne Westwood", "Xerjoff", "Yeezy Gap", "Zalando"
];

// Function to create the search interface
function createBrandSearch() {
  const container = document.createElement("div");
  container.style.textAlign = "center";
  container.style.padding = "30px";
  container.style.backgroundColor = "#16162D";
  container.style.borderRadius = "16px";
  container.style.color = "#fff";
  container.style.fontFamily = "Inter, sans-serif";

  const title = document.createElement("h2");
  title.innerText = "Check if your brand is supported";
  title.style.color = "#9A47FF";
  title.style.marginBottom = "20px";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Enter a brand name...";
  input.style.padding = "10px 15px";
  input.style.borderRadius = "8px";
  input.style.border = "none";
  input.style.width = "250px";
  input.style.marginRight = "10px";
  input.style.outline = "none";
  input.style.background = "#1f1f3d";
  input.style.color = "#fff";

  const button = document.createElement("button");
  button.innerText = "Search";
  button.style.padding = "10px 15px";
  button.style.border = "none";
  button.style.borderRadius = "8px";
  button.style.backgroundColor = "#9A47FF";
  button.style.color = "#fff";
  button.style.cursor = "pointer";

  const result = document.createElement("p");
  result.style.marginTop = "20px";
  result.style.fontSize = "18px";

  button.onclick = () => {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      result.innerText = "Please enter a brand name.";
      result.style.color = "#ccc";
      return;
    }

    const found = supportedBrands.some(
      brand => brand.toLowerCase() === query
    );

    if (found) {
      result.innerText = "✅ This brand is supported!";
      result.style.color = "#4caf50";
    } else {
      result.innerText = "❌ No store found for this brand.";
      result.style.color = "#f44336";
    }
  };

  container.appendChild(title);
  container.appendChild(input);
  container.appendChild(button);
  container.appendChild(result);

  // Add the search component to the page
  document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(container);
  });
}

// Initialize the component
createBrandSearch();
