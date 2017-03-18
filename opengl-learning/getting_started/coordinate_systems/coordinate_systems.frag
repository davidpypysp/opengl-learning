#version 330 core
in vec3 ourColor;
in vec2 TexCoord;

out vec4 color;

uniform sampler2D ourTexture1, ourTexture2;
uniform float rate;

void main()
{
    //color = texture(ourTexture2, TexCoord);
    vec2 TexCoord2 = vec2(TexCoord.x, 1.0f - TexCoord.y);
    color = mix(texture(ourTexture1, TexCoord), texture(ourTexture2, TexCoord2), rate);
}