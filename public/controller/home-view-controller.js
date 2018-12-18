import { MapService } from "../service/map-service.js";

export const home = {
    _map: null,
    _navbar: null,
    init: function () {

        MapService.init();
    },
    addListeners: function () {

    },
    buildNav: function() {

    }
};
