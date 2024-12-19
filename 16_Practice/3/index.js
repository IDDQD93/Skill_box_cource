function globalError() {
    const error = Error('Глобальная ошибка');
    error.name = 'GlobalError';
    throw error;
  }
  
  function localError() {
    const error = Error('Локальная ошибка');
    error.name = 'LocalError';
    throw error;
  }
  
  function testErrorScope(fn) {
    try {
       fn();
    } catch (error) {
        if(error.name === 'LocalError'){
         console.log('Обнаружена локальная ошибка');
        console.error(error);
        } else if (error.name === 'GlobalError') {
         console.log('Обнаружена глобальная ошибка');
        console.error(error);
        } else {
            throw error //перебрасываем другие ошибки на уровень выше
         }
    }
  }
  testErrorScope(localError);
  testErrorScope(globalError);