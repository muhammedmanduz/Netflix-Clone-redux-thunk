# Kütüphaneler

- react-router-dom
- redux
- react-redux
- redux-thunk
- axios
- react-icons
- tailwind
- react-player

# Kaynaklar

API: https://developer.themoviedb.org/reference/intro/getting-started

# React.memo(Hero) ne işe yarar?

- React.memo fonksiyonu, React'te performansı artırmak için kullanılan bir yardımcı araçtır. Bu fonksiyon, bir bileşenin yalnızca props'larında bir değişiklik olduğunda yeniden render edilmesini sağlar. Eğer props'lar aynı kalırsa, React.memo, bileşenin tekrar render edilmesini engeller ve önceki render sonucunu yeniden kullanır. Bu da performans iyileştirmelerine yol açabilir, özellikle büyük ve karmaşık bileşenlerde.

Örneğin:

javascript
import React from 'react';

const Hero = (props) => {
// Bileşen kodu burada
};

export default React.memo(Hero);
Bu kodda, Hero bileşeni, props'ları değişmediği sürece yeniden render edilmeyecektir. Bu, özellikle bileşenin sık sık render edilmesine gerek olmayan durumlarda faydalıdır.

React.memo, özellikle performans optimizasyonu gerektiren durumlarda kullanışlıdır. Ancak, doğru kullanılmadığında gereksiz yere karmaşıklık katabileceği için dikkatli kullanılmalıdır.
