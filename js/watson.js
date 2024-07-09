window.watsonAssistantChatOptions = {
    integrationID: "b0a3d956-cddc-429e-81d3-813f2e4ded37", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "d0bbf3fd-07a2-46de-bb31-92fd535ebda6", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});