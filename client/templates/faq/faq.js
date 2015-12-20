Template.faq.helpers({
    questions: function() {
        return Questions.find({}).map(function(question, index) {
            question.i = index;
            return question;
        });
    }
});

Template.faq.onRendered(function() {

    $('#panel-0').addClass("active");

});
