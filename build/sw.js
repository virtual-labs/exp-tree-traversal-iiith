importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"e7652d40e491688c4e3fdd811c62b8ac","url":"breadth-first-traversal/bft-exercise.html"},{"revision":"2eb80910fafbcaa8aa7cbc9e5d695a7b","url":"breadth-first-traversal/bft-practice.html"},{"revision":"552db2497d9e434f7f15fa3567b2b15c","url":"breadth-first-traversal/breadth-first-traversal-quiz.html"},{"revision":"ff7cd34a975b9f190f4ee4db467d10dc","url":"breadth-first-traversal/breadth-first-traversal-quiz.json"},{"revision":"e74594fdd9a2e33301201e1e775fc6e1","url":"breadth-first-traversal/breadth-first-traversal-theory.html"},{"revision":"66371bd8d513ce5b270ec581b3c4a1ac","url":"breadth-first-traversal/dft.html"},{"revision":"ae48ea0951ce33825629d19dd5ac272c","url":"breadth-first-traversal/index.html"},{"revision":"01474eec56c3161eededfc25620672d2","url":"breadth-first-traversal/simulation/assets/css/common-styles-responsive.css"},{"revision":"1bb940b2590ded85450c3cf7a3446ddb","url":"breadth-first-traversal/simulation/assets/js/iframeResize.js"},{"revision":"3b269aba765046acd1ce5703fa9dd792","url":"breadth-first-traversal/simulation/assets/js/instruction-box.js"},{"revision":"59b68fcfd1ac6508f28b8b51ac04e011","url":"breadth-first-traversal/simulation/bft-exercise.html"},{"revision":"bb5cd5a053c839523b1ea78f0d95e26e","url":"breadth-first-traversal/simulation/bft-practice.html"},{"revision":"160826457a3472e26ae0f8b43c0a4f4e","url":"breadth-first-traversal/simulation/bft.html"},{"revision":"54819229ec904abbf3d712d304195491","url":"breadth-first-traversal/simulation/css/commonstyle.css"},{"revision":"0e862344fe2121e7c63cb46bae231120","url":"breadth-first-traversal/simulation/css/hint_box.css"},{"revision":"37fcfb87f5e9f3be9faeea1b839bd4b4","url":"breadth-first-traversal/simulation/css/style.css"},{"revision":"6568f69f0193285da84be9590ef6ba4a","url":"breadth-first-traversal/simulation/js/data.js"},{"revision":"5186c39188c0f9b5bdba9ba3563a6ac0","url":"breadth-first-traversal/simulation/js/globalvariables.js"},{"revision":"32bd72abad6f3e5d5790c3a1f7f8ec3f","url":"breadth-first-traversal/simulation/js/main-demo.js"},{"revision":"379005246aefd5d7775989416f2a0b3d","url":"breadth-first-traversal/simulation/js/realization.js"},{"revision":"b11750278674c2b954d64769e9d8154c","url":"breadth-first-traversal/simulation/js/traversals-demo.js"},{"revision":"69a3edc6c32ce39a09eafd1c6ffc7f35","url":"breadth-first-traversal/simulation/js/traversals.js"},{"revision":"b203e5f9a9db79a731285fc69c52a626","url":"code-assessment.html"},{"revision":"e173687d413a129641c1b4feba603cbe","url":"code-assessment.json"},{"revision":"565ece6d620725d8fb66f6c0e5d1571f","url":"Commonfunctions/demo-utils.js"},{"revision":"887c7c7324b4f196ccfb65092cb06559","url":"Commonfunctions/exercise-utils.js"},{"revision":"c9ddc9a592b1e80fa0649bfd8dcd946d","url":"Commonfunctions/practice-utils.js"},{"revision":"598c83c9c52f91e857bec9645db4c97b","url":"depth-first-traversal/depth-first-traversal-iterative.html"},{"revision":"f4c20d2f0493c8ff241ad36a8479f0cc","url":"depth-first-traversal/depth-first-traversal-recursive.html"},{"revision":"04274ce3d53c022b7866704f2737b805","url":"depth-first-traversal/dfs-traversal-quiz.html"},{"revision":"5df0204b43e2352f6e7b1ac359830f8a","url":"depth-first-traversal/dfs-traversal-quiz.json"},{"revision":"bf763a94d6fb9ccb90297e81720ca96e","url":"depth-first-traversal/dft-exercise.html"},{"revision":"945dd2e67c2bfe161a2aeb02d83c3343","url":"depth-first-traversal/dft-practice.html"},{"revision":"3efcfdeff41de38f641414761dd31224","url":"depth-first-traversal/dft.html"},{"revision":"6f8e80db5ee36d4d7f95fcb566bf2e81","url":"depth-first-traversal/index.html"},{"revision":"d6517bf5c3181539a7fb37860aeef4b9","url":"depth-first-traversal/simulation/assets/css/common-styles-responsive.css"},{"revision":"1bb940b2590ded85450c3cf7a3446ddb","url":"depth-first-traversal/simulation/assets/js/iframeResize.js"},{"revision":"3b269aba765046acd1ce5703fa9dd792","url":"depth-first-traversal/simulation/assets/js/instruction-box.js"},{"revision":"5d60903f09f8db14ab9e8f6512d85d25","url":"depth-first-traversal/simulation/css/commonstyle.css"},{"revision":"0e862344fe2121e7c63cb46bae231120","url":"depth-first-traversal/simulation/css/hint_box.css"},{"revision":"f422f1bde8f08b558879c0337aa7825f","url":"depth-first-traversal/simulation/css/style.css"},{"revision":"f205ea8105052ef295c71c968420a7cb","url":"depth-first-traversal/simulation/dft-exercise.html"},{"revision":"e23bb6de951029e2b11781e1d7362b66","url":"depth-first-traversal/simulation/dft-practice.html"},{"revision":"808c4aadcd8fa037d899ac4e693c2c8a","url":"depth-first-traversal/simulation/dft.html"},{"revision":"6568f69f0193285da84be9590ef6ba4a","url":"depth-first-traversal/simulation/js/data.js"},{"revision":"f223d9bc8b653bca05cfde791e5907a0","url":"depth-first-traversal/simulation/js/globalvariables.js"},{"revision":"379005246aefd5d7775989416f2a0b3d","url":"depth-first-traversal/simulation/js/realization.js"},{"revision":"a2600d5b0b84b7b30e092a2059968378","url":"depth-first-traversal/simulation/js/traversals-demo.js"},{"revision":"5342660787a0486175bcca6d6ca8000a","url":"depth-first-traversal/simulation/js/traversals.js"},{"revision":"3ab8647b048879e86d7dabd86bfb7a9e","url":"depth-first-traversal/simulation/js/treeExercise.js"},{"revision":"956869c1444d680f3c9dcfb15b512e3a","url":"depth-first-traversal/simulation/js/treePractice.js"},{"revision":"fb04c6525582bb008146bdb0441f3013","url":"feedback.html"},{"revision":"7be684bf082fee64d68eb0456aff690b","url":"further-reading-and-references.html"},{"revision":"aa6cf32e129561fa916e2f060061fce1","url":"index.html"},{"revision":"96ebd319d73d86323659002ca17911b6","url":"overview.html"},{"revision":"636d1fe7383ed4fc0be4c87b02ec5de7","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"b693955b252c8954d10a83141b2a9e33","url":"posttest.html"},{"revision":"2b0755394fedeeae0fe8811a1713e573","url":"posttest.json"},{"revision":"a540e3d8c795b90c796babd4c2fec096","url":"pretest.html"},{"revision":"f5090a22716d7cf5618ccc56f0dec4df","url":"pretest.json"},{"revision":"12a4d4f13a2b146eabe2e258acd065ea","url":"reconstructing-binary-tree/from-inorder-and-postorder.html"},{"revision":"417487da55c668cb0462799672286048","url":"reconstructing-binary-tree/from-inorder-and-preorder.html"},{"revision":"addf663730207896a9804b1d8bceb041","url":"reconstructing-binary-tree/images/reconstruction_pre.jpg"},{"revision":"d587af84baac974db435f1e5fd2fa463","url":"reconstructing-binary-tree/images/reconstruction.jpg"},{"revision":"1a0358f4418a75fee74dec00a96dbc31","url":"reconstructing-binary-tree/index.html"},{"revision":"de03eee81e882ddb0b4bdcef223ec423","url":"reconstructing-binary-tree/tree-construction-quiz.html"},{"revision":"1a87f3b4b0f8d198ec2fc409125138d0","url":"reconstructing-binary-tree/tree-construction-quiz.json"},{"revision":"d3639dcfa1a94fd58fb1184a095f33fb","url":"tree-traversals/basics-of-traversal-quiz.html"},{"revision":"2421a8ac379e7755aa204adf86ee6ba9","url":"tree-traversals/basics-of-traversal-quiz.json"},{"revision":"e15bb3f5ffd29b4ee9b30e99b959a386","url":"tree-traversals/index.html"},{"revision":"12cd82a1ca10b239f7daf63a41e8d56c","url":"tree-traversals/tree-traversals-basics.html"},{"revision":"adf7562c695ce3f333f020c62a20de5f","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );