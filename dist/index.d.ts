export type TEvents = {
    [key: string]: Set<Function>;
};
/**
 * @class
 * @classdesc Класс, реализующий логику работы с подпиской на события и их генерацию
 * с уведомлением всех функций-обработчиков соответствующего события
 */
declare class EventEmitter {
    protected allEvents: Set<Function>;
    protected events: TEvents;
    protected onceCallbacks: TEvents;
    protected eventsPrefix: string;
    protected autoPrefix: boolean;
    /**
     * @class
     * @param {string} [eventsPrefix=""] Префикс для имени всех генерируемых событий "eventsPrefix:eventName"
     * @param {boolean} [autoPrefix=false] Добавлять ли автоматически префикс
     * к именам событий при подписке и отписке от них.
     * При генерации события этот префикс всегда добавляется автоматически
     */
    constructor(eventsPrefix?: string, autoPrefix?: boolean);
    /**
     * @description Получить имя события с учетом условий добавления префикса к нему
     * @param {string} type Имя события
     * @param {boolean} usePrefix Добавлять ли к имени события префикс, если он есть
     */
    getEventName(type: string, usePrefix?: boolean): string;
    /**
     * @description Метод подписки на события
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    on(type: string, callback: Function): EventEmitter;
    /**
     * @description Метод отписки от события
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    off(type: string, callback: Function): EventEmitter;
    /**
     * @description Метод подписки на события.
     * С помощью этого метода можно установить только один обработчик на одно имя события {type}
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    one(type: string, callback: Function): EventEmitter;
    /**
     * @description Метод подписки на события.
     * С помощью этого метода можно установить обработчик, который вызовется только один раз
     * и автоматически отпишется от события после вызова
     * @param {string} type Имя события
     * @param {Function} callback Функция-обработчик событий с именем {type}
     * @returns {this} Возвращает инстанс
     */
    once(type: string, callback: Function): EventEmitter;
    /**
     * @description Метод подписки на все события
     * @param {Function} callback Функция-обработчик всех событий
     * @returns {this} Возвращает инстанс
     */
    onAll(callback: Function): EventEmitter;
    /**
     * @description Метод отписки от всех событий
     * @param {Function} callback Функция-обработчик всех событий
     * @returns {this} Возвращает инстанс
     */
    offAll(callback: Function): EventEmitter;
    /**
     * @description Метод генерации событий, запускающий оповещение всех функций-обработчиков события с именем {type}
     * @param {string} type Имя события
     * @param {any} [arg] Данные, прикрепляемые к событию.
     * @returns {this} Возвращает инстанс
     */
    emit(type: string, arg?: any): any;
}
export default EventEmitter;
//# sourceMappingURL=index.d.ts.map