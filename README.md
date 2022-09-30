# Spaceweb vps

![](https://shields.io/badge/-HTML-orange)
![](https://shields.io/badge/-SCSS-C76494)
![](https://shields.io/badge/-JavaScript-yellow)
![](https://shields.io/badge/-React.JS-05D9FF)
![](https://shields.io/badge/-TypeScript-2D79C7)
![](https://shields.io/badge/-ESLint-4A31C3)
![](https://shields.io/badge/-Redux-764ABC)
![](https://shields.io/badge/-Redux_Tollkit-764ABC)

## Описание
- В данном приложение демонстрируется список тарифных планов компании spaceweb полученные по api.

## Функциональность
- Тарифные планы можно фильтровать по категориям.
- Для каждого тарифного плана можно выбрать дистрибутив, ПО, дата-центр.
- Если для данного тарифа доступен только один дата-центр, он выбирается автоматически, курсор при наведении на toggle становится обычным, изменение не доступно.
- Не все ПО подходит под каждый дистрибутив. Если выбрать ПО, затем выбрать дистрибутив, для которого нельзя выбрать данное ПО, то значение ПО становится - *"Без ПО"*.
- На разрешение от 768px до 1280px при открытии меню, контент сдвигается вправо на ширину меню.
- Меню по высоте занимает всю страницу за исключением footer'а. 

<tr>
    <hr>
</tr>

 [Ссылка на макет в Figma](https://www.figma.com/file/BW9QLYORlGJUXaG9bqyS4X/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B4%D0%BB%D1%8F-front-end-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D0%B0?node-id=0%3A1).

 [Ссылка на готовый проект.](https://tyt34.github.io/spaceweb-vps/).
 
 [Ссылка на api.](https://api.sweb.ru/notAuthorized/).


  ## Запуск приложения

В приложение используется scss v.6.0.0 для node v.16. Если у вас другая версия node, то обновите библиотеку scss.
1. npm i
2. npm run start

Если вы находитесь в корне папки, то можете воспользоваться командой: 
```
npm i && npm run start
```

