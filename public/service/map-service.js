import { MAP_KEY } from "../core/constants/constants.js";


export const MapService = {

    init: function() {
        initMap();
    }
};
function initMap() {
    mapkit.init({
        authorizationCallback: function (done) {
            done(MAP_KEY.JWT);
        }
    });

    // console.log(mapkit.userLocationAnnotation);
    // var Cupertino = new mapkit.CoordinateRegion(
    //    new mapkit.Coordinate(37.3316850890998, -122.030067374026),
    //    new mapkit.CoordinateSpan(0.167647972, 0.354985255)
    //);

    var map = new mapkit.Map("map");
    // map.region = Cupertino;
}

// Landmark annotation custom callout
function calloutForLandmarkAnnotation(annotation) {
    var div = document.createElement("div");
    div.className = "landmark";

    var title = div.appendChild(document.createElement("h1"));
    title.textContent = annotation.landmark.title;

    var section = div.appendChild(document.createElement("section"));

    var phone = section.appendChild(document.createElement("p"));
    phone.className = "phone";
    phone.textContent = annotation.landmark.phone;

    var link = section.appendChild(document.createElement("p"));
    link.className = "homepage";
    var a = link.appendChild(document.createElement("a"));
    a.href = annotation.landmark.url;
    a.textContent = "website";

    return div;
}
/*
class annotation {
// Landmark annotation callout delegate
    var CALLOUT_OFFSET = new DOMPoint(-148, -78);
    var landmarkAnnotationCallout = {
        calloutElementForAnnotation: function(annotation) {
            return calloutForLandmarkAnnotation(annotation);
        },

        calloutAnchorOffsetForAnnotation: function(annotation, element) {
            return CALLOUT_OFFSET;
        },

        calloutAppearanceAnimationForAnnotation: function(annotation) {
            return "scale-and-fadein .4s 0 1 normal cubic-bezier(0.4, 0, 0, 1.5)";
        }
    };

// Landmarks annotations
    var annotations = sanFranciscoLandmarks.map(function(landmark) {
        var annotation = new mapkit.MarkerAnnotation(landmark.coordinate, {
            callout: landmarkAnnotationCallout,
            color: "#5f1212"
        });
        annotation.landmark = landmark;
        return annotation;
    });

    var map = new mapkit.Map("map");
    map.showItems(annotations);
}
*/
