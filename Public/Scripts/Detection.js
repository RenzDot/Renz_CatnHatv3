// -----JS CODE-----
//Resource: https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_collision_detection

var colliders = [];
script.api.AddAABB = function(aabb){
   colliders.push(aabb);
};

function intersect(a, b) {
   return (a.api.minX <= b.api.maxX && a.api.maxX >= b.api.minX) &&
          (a.api.minY <= b.api.maxY && a.api.maxY >= b.api.minY) &&
          (a.api.minZ <= b.api.maxZ && a.api.maxZ >= b.api.minZ);
 };

 function CheckCollisions(){
   for (x = 0; x < colliders.length; x++) {
      colliders[x].api.MinMaxCalculations();
   }

   for (x = 0; x < colliders.length; x++) {
      for (y = x + 1; y < colliders.length; y++) {
         var colX = colliders[x];
         var colY = colliders[y];
         if (intersect(colX,colY)) {
            //colX.api.Intersection(colY);
            //colY.api.Intersection(colX);
            print("X AND Y INTERSECTED");
         }
      }
   }

 }

 var event = script.createEvent("UpdateEvent");
 event.bind(CheckCollisions);