FROM microsoft/dotnet:2.1-sdk

# warmup NuGet package cache
COPY packagescache.csproj /tmp/warmup/  
RUN dotnet restore /tmp/warmup/packagescache.csproj \  
      --source https://api.nuget.org/v3/index.json \
      --verbosity quiet \
    && rm -rf /tmp/warmup/

WORKDIR /  