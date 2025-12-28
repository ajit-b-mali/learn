#include "AssetManager.hpp"
#include <assert.h>

AssetManager* AssetManager::s_Instance = nullptr;

AssetManager::AssetManager()
{
    assert(s_Instance == nullptr);
    s_Instance = this;
}

sf::Texture& AssetManager::GetTexture(std::string const& filename)
{
    auto& texMap = s_Instance->m_Textures;

    auto pairFound = texMap.find(filename);
    if (pairFound != texMap.end())
    {
        return pairFound->second;
    }
    else
    {
        auto& texture = texMap[filename];
        if (!texture.loadFromFile(filename))
            std::exit(1);
        return texture;
    }
}