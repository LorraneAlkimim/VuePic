import Vue from 'vue';

Vue.directive('transform', {
    bind(el, binding, vnode) {
        let current = 0;

        el.addEventListener('dblclick', function() {
            let increment = binding.value || 90;
            let effect;
            
            if(!binding.arg || binding.arg == "rotate") {
                current = (binding.modifiers.reverse) ? current-=increment : current+=increment;

                effect = `rotate(${current}deg)`;
            } else if (binding.arg == "scale") {
                effect = `scale(${increment})`;
            }


            this.style.transform = effect;

            if(binding.modifiers.animate)  this.style.transition = "transform 0.5s";
        });
    }
});