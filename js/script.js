$(document).ready(function(){

	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		
		window.addEventListener('scroll', animOnScroll);
		function animOnScroll() {
			
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 4;

				let animItemPoint = window.innerHeight - animItemHeight / animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				
				}
				
				if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
					animItem.classList.add('_active');
					
				} else {
					if (!animItem.classList.contains('_anim-no-hide')) {
						animItem.classList.remove('_active');
					}
				}
			}
		}
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageXOffset || document.documentElement.scrollTop;
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}

		
		setTimeout(() => {
			animOnScroll();
		}, 300);
	
	}

	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.big_slide').slick({
		arrows: false,
		dots: true,
	});

	$(document).ready(function(){
		var $tabs = function (target) {
			var
			  _elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
			  _eventTabsShow,
			  _showTab = function (tabsLinkTarget) {
				 var tabsPaneTarget, tabsLinkActive, tabsPaneShow;
				 tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
				 tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
				 tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
				 // если следующая вкладка равна активной, то завершаем работу
				 if (tabsLinkTarget === tabsLinkActive) {
					return;
				 }
				 // удаляем классы у текущих активных элементов
				 if (tabsLinkActive !== null) {
					tabsLinkActive.classList.remove('tabs__link_active');
				 }
				 if (tabsPaneShow !== null) {
					tabsPaneShow.classList.remove('tabs__pane_show');
				 }
				 // добавляем классы к элементам (в завимости от выбранной вкладки)
				 tabsLinkTarget.classList.add('tabs__link_active');
				 tabsPaneTarget.classList.add('tabs__pane_show');
				 document.dispatchEvent(_eventTabsShow);
			  },
			  _switchTabTo = function (tabsLinkIndex) {
				 var tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
				 if (tabsLinks.length > 0) {
					if (tabsLinkIndex > tabsLinks.length) {
					  tabsLinkIndex = tabsLinks.length;
					} else if (tabsLinkIndex < 1) {
					  tabsLinkIndex = 1;
					}
					_showTab(tabsLinks[tabsLinkIndex - 1]);
				 }
			  };
		 
			_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });
		 
			_elemTabs.addEventListener('click', function (e) {
			  var tabsLinkTarget = e.target;
			  // завершаем выполнение функции, если кликнули не по ссылке
			  if (!tabsLinkTarget.classList.contains('tabs__link')) {
				 return;
			  }
			  // отменяем стандартное действие
			  e.preventDefault();
			  _showTab(tabsLinkTarget);
			});
		 
			return {
			  showTab: function (target) {
				 _showTab(target);
			  },
			  switchTabTo: function (index) {
				 _switchTabTo(index);
			  }
			}
		 
		 };
		 
		 $tabs('.tabs1');
		 $tabs('.tabs');
	});

});