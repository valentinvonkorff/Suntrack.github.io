document.addEventListener("DOMContentLoaded", () => {
  // Estado global para tracking de selecciones
  const productSelections = {
    mini: { color: 'gris' },
    standard: {},
    pro: {}
  };

  // Color swatch functionality
  const initColorSwatches = () => {
    document.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        const mainImg = card.querySelector('[id$="-main-img"]');
        if (mainImg) {
          mainImg.src = e.target.dataset.src;
          
          // Actualizar selección de color para Mini
          const colorMap = {
            'minigris.webp': 'gris',
            'miniblanco.webp': 'blanco',
            'mininegro.webp': 'negro',
            'minirosa.webp': 'rosa'
          };
          productSelections.mini.color = colorMap[e.target.dataset.src];
        }
        
        // Update active state
        card.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        e.target.classList.add('active');
      });
    });
  };
  
  // Inicializar botones de compra
  const initBuyButtons = () => {
    document.querySelectorAll('.buy-button').forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const model = e.target.dataset.model;
        const selection = productSelections[model];
        
        // Construir URL con parámetros
        let url = 'index.html#contacto?modelo=' + model;
        if (selection.color) {
          url += '&color=' + selection.color;
        }
        
        // Ir a la sección de contacto con los parámetros
        window.location.href = url;
      });
    });
  };
  
  initColorSwatches();
  initBuyButtons();
  const translateBtn = document.getElementById("translate-btn");
  let isEnglish = false;
  // Helper safe setters so script can run on pages that don't have all IDs
  const setText = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  };
  const setHTML = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  };
  const setPlaceholder = (id, text) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = text;
  };

  if (translateBtn) {
    translateBtn.addEventListener("click", () => {
      if (!isEnglish) {
        setText("menu-beneficios", "Benefits");
        setText("menu-caracteristicas", "Features");
        setText("menu-comparativa", "Comparison");
        setText("menu-comprar", "Buy");
        setText("menu-opiniones", "Reviews");
        setText("menu-especificaciones", "Specifications");

        setText("hero-text", "Your solar panel always facing the sun. More energy, less effort.");
        setText("btnComprar", "I want it!");
        translateBtn.textContent = "🌍 Traducir a Español";

        setText("espec-title", "Specifications");
        setText("espec-text", "SunTrack is an intelligent solar panel designed to maximize solar energy capture efficiently and portably. Ideal for outdoor use and activities like camping or hiking, it combines durability, mobility, and advanced technology to provide clean energy anywhere.");
        setText("espec1", "🔋 Battery capacity: 20,000 mAh");
        setText("espec2", "🌞 Solar panel: 25W monocrystalline");
        setText("espec3", "⚙ Material: aluminum and weather-resistant polycarbonate");
        setText("espec4", "📏 Dimensions: 30cm x 20cm x 5cm");
        setText("espec5", "💧 Water resistance: IP65");
        setText("espec6", "🌡 Operating temperature: -10°C to 60°C");

        setText("beneficios-title", "Why choose SunTrack?");
        setText("beneficio1-title", "⚡ Fast charging");
        setText("beneficio1-text", "Take full advantage of sunlight with smart orientation.");
        setText("beneficio2-title", "🎒 Portable");
        setText("beneficio2-text", "Ideal for campers and hikers on the move.");
        setText("beneficio3-title", "🌱 Eco-friendly");
        setText("beneficio3-text", "Clean and renewable energy for your daily life.");

        setText("comparativa-title", "Product Comparison");
        setText("col-caracteristica", "Feature");
        setText("col-suntrack", "SunTrack");
        setText("col-general", "Market Average");

        setText("car1", "Battery");
        setText("suntrack-bateria", "20,000 mAh");
        setText("general-bateria", "15,000 mAh");

        setText("car2", "Solar Panel");
        setText("suntrack-panel", "25W Monocrystalline");
        setText("general-panel", "20W Polycrystalline");

        setText("car4", "Eco-friendly");
        setText("suntrack-ecologico", "Yes");
        setText("general-ecologico", "Variable");

        setText("car5", "Outdoor Resistance");
        setText("suntrack-resistencia", "IP65");
        setText("general-resistencia", "IP54");

        setText("caracteristicas-title", "Features");
        setText("caract1", "✔ Automatically follows the sun");
        setText("caract2", "✔ Smooth and efficient movement");
        setText("caract3", "✔ Outdoor resistant");
        setText("caract4", "✔ Compatible with small panels");

        setText("opiniones-title", "What our customers say");
        setText("opinion1-nombre", "Ana M.");
        setText("opinion1-text", "“SunTrack has changed the way we use energy on our trips. Highly recommended!”");
        setText("opinion2-nombre", "Luis P.");
        setText("opinion2-text", "“I love the portability and efficiency. Fast and reliable charging at all times.”");
        setText("opinion3-nombre", "Carla R.");
        setText("opinion3-text", "“An eco-friendly and practical product. Perfect for outdoor enthusiasts.”");

        setText("compra-title", "Buy now");
        setHTML("precio-text", "Launch price: <b>USD 99</b>");
        setPlaceholder("nombre", "Your name");
        setPlaceholder("correo", "Your email");
        setText("btnFormComprar", "Buy");

        isEnglish = true;
      } else {
        setText("menu-beneficios", "Beneficios");
        setText("menu-comparativa", "Comparativa");
        setText("menu-caracteristicas", "Características");
        setText("menu-comprar", "Comprar");
        setText("menu-opiniones", "Opiniones");
        setText("menu-especificaciones", "Especificaciones");

        setText("hero-text", "Tu panel solar siempre apuntando al sol. Más energía, menos esfuerzo.");
        setText("btnComprar", "¡Lo quiero!");
        translateBtn.textContent = "🌍 Translate to English";

        setText("espec-title", "Especificaciones");
        setText("espec-text", "SunTrack es un panel solar inteligente diseñado para maximizar la captación de energía solar de manera eficiente y portátil. Ideal tanto para uso en exteriores como para actividades de camping o excursiones, combina resistencia, movilidad y tecnología avanzada para brindarte energía limpia en cualquier lugar.");
        setText("espec1", "🔋 Capacidad de batería: 20,000 mAh");
        setText("espec2", "🌞 Panel solar: monocristalino de 25W");
        setText("espec3", "⚙ Material: aluminio y policarbonato resistente al clima");
        setText("espec4", "📏 Dimensiones: 30cm x 20cm x 5cm");
        setText("espec5", "💧 Resistente al agua: IP65");
        setText("espec6", "🌡 Temperatura de operación: -10°C a 60°C");

        setText("beneficios-title", "¿Por qué elegir SunTrack?");
        setText("beneficio1-title", "⚡ Carga rápida");
        setText("beneficio1-text", "Aprovecha la luz solar al máximo con orientación inteligente.");
        setText("beneficio2-title", "🎒 Portátil");
        setText("beneficio2-text", "Ideal para campistas y excursionistas en movimiento.");
        setText("beneficio3-title", "🌱 Ecológico");
        setText("beneficio3-text", "Energía limpia y renovable para tu día a día.");

        setText("comparativa-title", "Comparativa de productos");
        setText("col-caracteristica", "Característica");
        setText("col-suntrack", "SunTrack");
        setText("col-general", "Promedio mercado");

        setText("car1", "Batería");
        setText("suntrack-bateria", "20,000 mAh");
        setText("general-bateria", "15,000 mAh");

        setText("car2", "Panel solar");
        setText("suntrack-panel", "Monocristalino 25W");
        setText("general-panel", "Policristalino 20W");

        setText("car4", "Ecológico");
        setText("suntrack-ecologico", "Sí");
        setText("general-ecologico", "Variable");

        setText("car5", "Resistencia exterior");
        setText("suntrack-resistencia", "IP65");
        setText("general-resistencia", "IP54");

        setText("caracteristicas-title", "Características");
        setText("caract1", "✔ Sigue el sol automáticamente");
        setText("caract2", "✔ Movimiento suave y eficiente");
        setText("caract3", "✔ Resistente a exteriores");
        setText("caract4", "✔ Compatible con paneles pequeños");

        setText("opiniones-title", "Lo que opinan nuestros clientes");
        setText("opinion1-nombre", "Ana M.");
        setText("opinion1-text", "“SunTrack ha cambiado la forma en que usamos energía en nuestras excursiones. ¡Muy recomendable!”");
        setText("opinion2-nombre", "Luis P.");
        setText("opinion2-text", "“Me encanta la portabilidad y eficiencia. Carga rápida y fiable en todo momento.”");
        setText("opinion3-nombre", "Carla R.");
        setText("opinion3-text", "“Un producto ecológico y práctico. Perfecto para quienes disfrutan del aire libre.”");

        setText("compra-title", "Compra ahora");
        setHTML("precio-text", "Precio lanzamiento: <b>USD 99</b>");
        setPlaceholder("nombre", "Tu nombre");
        setPlaceholder("correo", "Tu correo");
        setText("btnFormComprar", "Comprar");

        isEnglish = false;
      }
    });
  }

  // Form and buy button behaviour: only attach if elements exist
  const formCompra = document.getElementById("formCompra");
  const compraMsg = document.getElementById("compra-msg");
  const btnComprar = document.getElementById("btnComprar");

  if (btnComprar) {
    btnComprar.addEventListener("click", () => {
      const contacto = document.getElementById("contacto");
      if (contacto) contacto.scrollIntoView({ behavior: "smooth" });
      else {
        // if separate contact page exists, navigate there
        window.location.href = "contacto.html";
      }
    });
  }

  if (formCompra) {
    formCompra.addEventListener("submit", (e) => {
      e.preventDefault();
      if (compraMsg) {
        compraMsg.textContent = "✅ ¡Gracias por tu compra! Te contactaremos pronto.";
        compraMsg.classList.add("text-success");
      }

      const nombreEl = document.getElementById("nombre");
      const correoEl = document.getElementById("correo");
      if (nombreEl) nombreEl.value = "";
      if (correoEl) correoEl.value = "";
    });
  }

  // Product variant interactions: color swatches for Mini product
  const miniMain = document.getElementById('mini-main-img');
  const swatches = document.querySelectorAll('.color-swatch');
  if (miniMain && swatches.length) {
    // set first swatch as active
    swatches.forEach((s, idx) => {
      if (idx === 0) s.classList.add('active');
      s.addEventListener('click', () => {
        const src = s.getAttribute('data-src');
        if (src) miniMain.src = src;
        swatches.forEach(x => x.classList.remove('active'));
        s.classList.add('active');
      });
      // keyboard support
      s.addEventListener('keydown', (ev) => {
        if (ev.key === 'Enter' || ev.key === ' ') {
          ev.preventDefault();
          s.click();
        }
      });
      // make focusable
      s.tabIndex = 0;
    });
  }
});
